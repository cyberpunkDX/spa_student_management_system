<template>
  <main class="hero h-100">
    <div class="hero h-100 w-100 p-4 d-grid justify-content-center align-items-center">
      <div class="mx-auto p-2">
        <h4 class="fw-bold display-1 text-light">Elevating Efficiency and Experience</h4>
        <p class="text-light">Single Page Applications (SPAs) are reshaping how schools manage student information,
        providing a
        cutting-edge solution to outdated, clunky systems. By combining the power of Vue.js, a lightweight JavaScript
        framework, with Laravel, a robust PHP backend framework, this modern approach addresses critical challenges in
        education technology.</p>
      </div>

      
      <div class="mx-auto d-flex">

        <router-link to="/about">
          <button class="btn btn-outline-primary mx-4">Read More</button>
        </router-link>

        <router-link to="/authenticate">
          <button class="btn btn-primary">Get Started</button>
        </router-link>

      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="d-flex justify-content-end">
            <img src="../../images/server.png" class="img-fluid" alt="">
          </div>
        </div>
        <div class="col-lg-8">
          <h4 class="display-6 text-light fw-bold my-5">Reduced Server Load with SPA Architecture
          </h4>
          <p class="text-light">Traditional multi-page applications (MPAs) require servers to reload entire pages for every user
            interaction, causing heavy server loads and slower response times. In contrast, a Vue.js SPA eliminates this
            inefficiency by loading a single HTML page upfront and dynamically updating content through AJAX requests
            and API endpoints.

            Laravel serves as the backbone, handling these API requests efficiently, delivering only the required data,
            and reducing server overhead. This asynchronous communication ensures servers aren't overwhelmed, even
            during peak usage, such as registration periods or grading deadlines.</p>
        </div>
      </div>
    </div>
    <!-- <div class="container">


      <div class="row mt-4 border rounded">
        <div class="col-lg-8">
          <h4 class="display-6 fw-bold">Reduced Server Load with SPA Architecture
          </h4>
          <p>Traditional multi-page applications (MPAs) require servers to reload entire pages for every user
            interaction, causing heavy server loads and slower response times. In contrast, a Vue.js SPA eliminates this
            inefficiency by loading a single HTML page upfront and dynamically updating content through AJAX requests
            and API endpoints.

            Laravel serves as the backbone, handling these API requests efficiently, delivering only the required data,
            and reducing server overhead. This asynchronous communication ensures servers aren't overwhelmed, even
            during peak usage, such as registration periods or grading deadlines.</p>
        </div>
        <div class="col-lg-4">
          <img src="" class="img-fluid" alt="">
        </div>
      </div>
    </div> -->
  </main>
</template>

<script>
export default {
  name: 'HomeComponent',
};
</script>
