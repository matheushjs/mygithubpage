{% extends "partials/main.njs" %}


{% block morehead %}
<style>
  h1 {
    margin-bottom: 0.5em;
    padding-top: 1em;
  }
</style>
{% endblock %}


{% block header %}
<div class="container">
  <h2>High Performance Algorithms for Counting Collisions and Pairwise Interactions</h2>
  <p>Matheus Henrique Junqueira Saldanha, Paulo Sérgio Lopes de Souza</p>
</div>
{% endblock %}


{% block body %}
<div class="container">
  <h3>Accepted in <a href="https://www.iccs-meeting.org/iccs2019/" target="_blank">ICCS 2019</a>!</h3>
  <h3>See the postprint <a href="https://arxiv.org/pdf/1901.11204" target="_blank">here</a>!</h3>
</div>

<div class="container">
  <h1>Abstract</h1>
  <p>
    The problem of counting collisions or interactions is common in areas as computer graphics and scientific simulations.
    Since it is a major bottleneck in applications of these areas, a lot of research has been done on such subject, mainly focused on techniques that allow calculations to be performed within pruned sets of objects.
    This paper focuses on how interaction calculation (such as collisions) within these sets can be done more efficiently than existing approaches.
    Two algorithms are proposed: a sequential algorithm that has linear complexity at the cost of high memory usage; and a parallel algorithm, mathematically proved to be correct, that manages to use GPU resources more efficiently than existing approaches.
    The proposed and existing algorithms were implemented, and experiments show a speedup of 21.7 for the sequential algorithm (on small problem size), and 1.12 for the parallel proposal (large problem size).
    By improving interaction calculation, this work contributes to research areas that promote interconnection in the modern world, such as computer graphics and robotics.
  </p>
</div>

<div class="container">
  <h1>Source Code Repositories</h1>
  <table class="table table-hover">
    <tbody>
      <tr>
        <th scope="row">Collision Counting Algorithms (root directory)</th>
        <td><a href="//github.com/matheushjs/ElfCudaLibs/tree/master/ElfColCnt" target="_blank">GitHub Repository</a></td>
      </tr>
      <tr>
        <th scope="row">Protein Structure Prediction Algorithm</th>
        <td><a href="//github.com/matheushjs/ElfPSP_ParallelABC" target="_blank">GitHub Repository</a></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="container" style="margin-bottom: 3em;">
  <h1>Article's Appendix</h1>
  <p>Can't see the file? Download the <a href="/images/articles/1/appendix.pdf">PDF here</a>.</p>
  <div style="height: 90vh;" class="shadow">
    <embed src="/images/articles/1/appendix.pdf" style="width: 100%; height: 100%;" type="application/pdf">
  </div>
</div>
{% endblock %}
