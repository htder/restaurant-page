const headerBtns = document.querySelectorAll(".nav-item .nav-link");
const page = document.querySelector(".content");

// Home module
const home = (function () {
  function createHomePage() {
    const sectionContainer = document.createElement("div");
    sectionContainer.innerHTML = `      
    <div class="home-content">
    <div class="px-4 pt-1 my-5 text-center">
      <h1 class="display-4 fw-bold">Pasta Pasta</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh">
        <div class="container px-5 align-items-center">
          <img
            src="../images/pexels-eva-elijas-6103858.jpg"
            class="img-fluid border rounded-3 mb-4"
            alt="Example image"
            width="600"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="../images/pexels-ali-nafezarefi-4161714.jpg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Pasta that tastes good
          </h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
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
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Pasta that is pasta</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>`;
    return sectionContainer;
  }
  return {
    createHomePage,
  };
})();

// Menu module
const menu = (function () {
  function createMenuPage() {
    const sectionContainer = document.createElement("div");
    sectionContainer.innerHTML = ` 
    <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-1">
      <div class="container col-xxl-8 px-4 py-1">
        <div class="row flex-lg-row align-items-center g-5 py-1">
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
            <h2 class="display-5 fw-bold lh-1 mb-3">Menu Item</h2>
            <p class="lead">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
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
            <h2 class="display-5 fw-bold lh-1 mb-3">Menu Item</h2>
            <p class="lead">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
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
            <h2 class="display-5 fw-bold lh-1 mb-3">Menu Item</h2>
            <p class="lead">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
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
            <h2 class="display-5 fw-bold lh-1 mb-3">Menu Item</h2>
            <p class="lead">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
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
            <h2 class="display-5 fw-bold lh-1 mb-3">Menu Item</h2>
            <p class="lead">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return sectionContainer;
  }

  return {
    createMenuPage,
  };
})();

// Contact us modules
const contact = (function () {
  function createContactPage() {
    const sectionContainer = document.createElement("div");
    sectionContainer.innerHTML = `      
    <div class="container px-4 py-1" id="featured-3">
    <div class="row g-4 py-1">
      <div class="container col-xxl-8 px-4 py-1">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
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
            <span class="lead"> 01234-123-123 </span>
            <br />
            <span class="lead"> email@email.com </span>
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
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
            <span class="lead"> 98765-987-987 </span>
            <br />
            <span class="lead"> chef@chef.com </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return sectionContainer;
  }
  return {
    createContactPage,
  };
})();

page.appendChild(home.createHomePage());

headerBtns.forEach((button) =>
  button.addEventListener("click", (event) => {
    removeActive(headerBtns);
    event.target.classList.add("active");
    clearPage();
    console.log(event.target.textContent);
    if (event.target.textContent === "Home")
      page.appendChild(home.createHomePage());
    if (event.target.textContent === "Menu")
      page.appendChild(menu.createMenuPage());
    if (event.target.textContent === "Contact")
      page.appendChild(contact.createContactPage());
  })
);

function removeActive(buttons) {
  buttons.forEach((button) => {
    button.classList = "nav-link";
  });
}

function clearPage() {
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }
}
