var express = require('express')
var router = express.Router();
var fs = require('fs');
var path = require('path');
var auth = require('./authentication');

// Returns whether user with id 'id' has a secret page.
function user_has_secret(userid){
  dirs = fs.readdirSync('./client/secret');

  for(var i = 0; i < dirs.length; i++){
    dirs[i] = Number(dirs[i]);
  }

  return dirs.indexOf(Number(userid)) != -1;
}

// For the root URL, we unconditionally redirect the user to their index.
// If it doesn't exist, let the other middlewares handle it.
router.get("/", (req, res) => {
  res.redirect("/secret/" + (req.session.userid || "not_logged_in") + "/");
});

// Middleware for always checking if the user is authorized
router.use((req, res, next) => {
  // Take the id of the URL. From '/secret/1/...', take 1.
  var id = Number(req.url.split('/').filter(str => { return str !== ''; })[0]);

  if(id && user_has_secret(req.session.userid) && Number(req.session.userid) === id){
    return next();
  } else {
    res.render("pages/message_page", {
      session: req.session,
      message: "Sorry, there is nothing special for you yet.",
    });
  }
});

// Middleware for providing req.session with data specific to each user
router.use((req, res, next) => {
  if(req.session.user_data) return next();
  req.session.user_data = {}

  if(req.session.username === 'walwal20'){
    auth.all_users()
    .then(users => {
      req.session.user_data.all_users = users.sort((a, b) => { return a.id > b.id; });
      return next();
    })
    .catch(err => console.log(err.stack));
  } else {
    return next();
  }
});

// Then we serve the desired HTML/EJS page.
// If the required file has no extension, we assume it to be .ejs and try to render it.
// If it fails to render, we go next().
router.get("*", (req, res, next) => {
  var info = path.parse(req.url);

  // If URL isn't any of the following extensions
  if(['', '.html', '.ejs'].indexOf(info.ext) == -1)
    return next();

  // If requested path is a directory, serve the index.ejs
  if(req.url.slice(-1) === '/'){
    req.url += 'index.ejs';
  // If extension is blank, assume it is .ejs
  } else if(info.ext == '') {
    req.url += '.ejs';
  }

  // Try to serve the file, else next()
  res.render(path.join("secret" + req.url), {session: req.session}, function(err, html){
    if(err){
      return next(); // By doing next, we will probably fall into the 'page doesnt exist' middleware on index.js
    } else {
      res.send(html);
    }
  });
});

// Then we serve all other files statically
router.use(express.static(path.resolve('./client/secret')));

module.exports = {
  router,
  user_has_secret
};