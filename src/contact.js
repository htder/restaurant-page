export function createContactPage() {
  const sectionContainer = document.createElement("div");
  sectionContainer.innerHTML = `      
    <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-1">
      <div class="container col-xxl-8 px-4 pt-1 pb-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="../images/pexels-victor-jung-983587.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold lh-1 mb-3">Reception</h2>
            <p class="lead">Call to arrange a booking.</p>
            <p class="lead"> 01234-123-123 
            <br /> email@email.com </p>
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="../images/pexels-victor-jung-983587.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold lh-1 mb-3">Head Chef</h2>
            <p class="lead">Call to talk about food.</p>
            <p class="lead"> 98765-987-987
            <br />
            chef@chef.com </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return sectionContainer;
}
