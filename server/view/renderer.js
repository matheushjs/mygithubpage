
/**
 * Our website uses EJS template engine, which requires every webpage to be server by means of a
 *   call to `res.render(page, objects)`.
 *
 * `objects` is a JSON object that is used by the template itself; it can contain the name of the user,
 * or a message to be shown in the page, or some boolean control variables. It can be bothersome to
 * render pages having to remember what objects are required to render each of them.
 *
 * The Render thus comes for easing the process of rendering, by encapsulating all data needed for
 * rendering pages, and providing some specialized render functions that accept arguments for changing
 * the rendered page.
 *
 * @class View::Renderer
 * @constructor
 * @param {Object} res The `res` object from the express environment.
 * @param {String} [callname = null] Name by which we should call the user.
 * @param {Boolean} [specialUser = false] Whether the user has a special page or not.
 * @param {String} [language = "en"] The language in which to serve the page.
 * @param {Object} [translations = null] Object containing translation strings for the language in which to
 */
class Renderer {
  constructor(res, callname = null, specialUser = false, language = "en", translations = null){
    this.res = res;
    this.callname = callname;
    this.specialUser = specialUser;
    this.language = language;
    this.translations = translations;
  }

  messagePage(message){
    this.res.render("message_page", {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
      message,
    });
  }

  account(){
    this.res.render("account", {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
    });
  }

  login(failMsg = null){
    this.res.render("login", {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
      failMsg,
    });
  }

  signup(failMsg = null){
    this.res.render("signup", {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
      failMsg,
    });
  }

  secret(visitors = -1){
    this.res.render("secret/index", {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
      visitors,
    });
  }

  allUsers(users){
    this.res.render("secret/all_users", {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
      users,
    });
  }

  render(pageName){
    this.res.render(pageName, {
      callname: this.callname,
      specialUser: this.specialUser,
      lang: this.language,
      trans: this.translations,
    });
  }
}

module.exports = {
  Renderer,
};
