/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtIC5uYXYtbGlua1wiKTtcbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbi8vIEhvbWUgbW9kdWxlXG5jb25zdCBob21lID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgICAgICAgXG4gICAgPGRpdiBjbGFzcz1cImhvbWUtY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJweC00IHB0LTEgbXktNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS00IGZ3LWJvbGRcIj5QYXN0YSBQYXN0YTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgbXgtYXV0b1wiPlxuICAgICAgICA8cCBjbGFzcz1cImxlYWQgbWItNFwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXG4gICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW5cbiAgICAgICAgICByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0XG4gICAgICAgICAgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiIHN0eWxlPVwibWF4LWhlaWdodDogMzB2aFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiLi4vaW1hZ2VzL3BleGVscy1ldmEtZWxpamFzLTYxMDM4NTguanBnXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkIGJvcmRlciByb3VuZGVkLTMgbWItNFwiXG4gICAgICAgICAgICBhbHQ9XCJFeGFtcGxlIGltYWdlXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC14eGwtOCBweC00IHB5LTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC1sZy1yb3ctcmV2ZXJzZSBhbGlnbi1pdGVtcy1jZW50ZXIgZy01IHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtc20tOCBjb2wtbGctNlwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9wZXhlbHMtYWxpLW5hZmV6YXJlZmktNDE2MTcxNC5qcGdcIlxuICAgICAgICAgICAgY2xhc3M9XCJkLWJsb2NrIG14LWxnLWF1dG8gaW1nLWZsdWlkXCJcbiAgICAgICAgICAgIGFsdD1cIkJvb3RzdHJhcCBUaGVtZXNcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGQgbGgtMSBtYi0zXCI+XG4gICAgICAgICAgICBQYXN0YSB0aGF0IHRhc3RlcyBnb29kXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcbiAgICAgICAgICAgIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3Jpc1xuICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC14eGwtOCBweC00IHB5LTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC1sZy1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGctNSBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgY29sLXNtLTggY29sLWxnLTZcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvcGV4ZWxzLXZpY3Rvci1qdW5nLTk4MzU4Ny5qcGdcIlxuICAgICAgICAgICAgY2xhc3M9XCJkLWJsb2NrIG14LWxnLWF1dG8gaW1nLWZsdWlkXCJcbiAgICAgICAgICAgIGFsdD1cIkJvb3RzdHJhcCBUaGVtZXNcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGQgbGgtMSBtYi0zXCI+UGFzdGEgdGhhdCBpcyBwYXN0YTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gICAgcmV0dXJuIHNlY3Rpb25Db250YWluZXI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVIb21lUGFnZSxcbiAgfTtcbn0pKCk7XG5cbi8vIE1lbnUgbW9kdWxlXG5jb25zdCBtZW51ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgIFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNCBweS01XCIgaWQ9XCJmZWF0dXJlZC0zXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTQgcHktMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb2wteHhsLTggcHgtNCBweS0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC1sZy1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGctNSBweS0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtc20tOCBjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvcGV4ZWxzLXZpY3Rvci1qdW5nLTk4MzU4Ny5qcGdcIlxuICAgICAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgbXgtbGctYXV0byBpbWctZmx1aWRcIlxuICAgICAgICAgICAgICBhbHQ9XCJCb290c3RyYXAgVGhlbWVzXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGQgbGgtMSBtYi0zXCI+TWVudSBJdGVtPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlxuICAgICAgICAgICAgICBQYXJhZ3JhcGggb2YgdGV4dCBiZW5lYXRoIHRoZSBoZWFkaW5nIHRvIGV4cGxhaW4gdGhlIGhlYWRpbmcuXG4gICAgICAgICAgICAgIFdlJ2xsIGFkZCBvbnRvIGl0IHdpdGggYW5vdGhlciBzZW50ZW5jZSBhbmQgcHJvYmFibHkganVzdCBrZWVwXG4gICAgICAgICAgICAgIGdvaW5nIHVudGlsIHdlIHJ1biBvdXQgb2Ygd29yZHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC14eGwtOCBweC00IHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmbGV4LWxnLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZy01IHB5LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGNvbC1zbS04IGNvbC1sZy02XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9wZXhlbHMtdmljdG9yLWp1bmctOTgzNTg3LmpwZ1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZC1ibG9jayBteC1sZy1hdXRvIGltZy1mbHVpZFwiXG4gICAgICAgICAgICAgIGFsdD1cIkJvb3RzdHJhcCBUaGVtZXNcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJkaXNwbGF5LTUgZnctYm9sZCBsaC0xIG1iLTNcIj5NZW51IEl0ZW08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+XG4gICAgICAgICAgICAgIFBhcmFncmFwaCBvZiB0ZXh0IGJlbmVhdGggdGhlIGhlYWRpbmcgdG8gZXhwbGFpbiB0aGUgaGVhZGluZy5cbiAgICAgICAgICAgICAgV2UnbGwgYWRkIG9udG8gaXQgd2l0aCBhbm90aGVyIHNlbnRlbmNlIGFuZCBwcm9iYWJseSBqdXN0IGtlZXBcbiAgICAgICAgICAgICAgZ29pbmcgdW50aWwgd2UgcnVuIG91dCBvZiB3b3Jkcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29sLXh4bC04IHB4LTQgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgtbGctcm93IGFsaWduLWl0ZW1zLWNlbnRlciBnLTUgcHktNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgY29sLXNtLTggY29sLWxnLTZcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vaW1hZ2VzL3BleGVscy12aWN0b3ItanVuZy05ODM1ODcuanBnXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJkLWJsb2NrIG14LWxnLWF1dG8gaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgYWx0PVwiQm9vdHN0cmFwIFRoZW1lc1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImRpc3BsYXktNSBmdy1ib2xkIGxoLTEgbWItM1wiPk1lbnUgSXRlbTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5cbiAgICAgICAgICAgICAgUGFyYWdyYXBoIG9mIHRleHQgYmVuZWF0aCB0aGUgaGVhZGluZyB0byBleHBsYWluIHRoZSBoZWFkaW5nLlxuICAgICAgICAgICAgICBXZSdsbCBhZGQgb250byBpdCB3aXRoIGFub3RoZXIgc2VudGVuY2UgYW5kIHByb2JhYmx5IGp1c3Qga2VlcFxuICAgICAgICAgICAgICBnb2luZyB1bnRpbCB3ZSBydW4gb3V0IG9mIHdvcmRzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb2wteHhsLTggcHgtNCBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC1sZy1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGctNSBweS01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtc20tOCBjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvcGV4ZWxzLXZpY3Rvci1qdW5nLTk4MzU4Ny5qcGdcIlxuICAgICAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgbXgtbGctYXV0byBpbWctZmx1aWRcIlxuICAgICAgICAgICAgICBhbHQ9XCJCb290c3RyYXAgVGhlbWVzXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGQgbGgtMSBtYi0zXCI+TWVudSBJdGVtPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlxuICAgICAgICAgICAgICBQYXJhZ3JhcGggb2YgdGV4dCBiZW5lYXRoIHRoZSBoZWFkaW5nIHRvIGV4cGxhaW4gdGhlIGhlYWRpbmcuXG4gICAgICAgICAgICAgIFdlJ2xsIGFkZCBvbnRvIGl0IHdpdGggYW5vdGhlciBzZW50ZW5jZSBhbmQgcHJvYmFibHkganVzdCBrZWVwXG4gICAgICAgICAgICAgIGdvaW5nIHVudGlsIHdlIHJ1biBvdXQgb2Ygd29yZHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC14eGwtOCBweC00IHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmbGV4LWxnLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZy01IHB5LTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGNvbC1zbS04IGNvbC1sZy02XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9wZXhlbHMtdmljdG9yLWp1bmctOTgzNTg3LmpwZ1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZC1ibG9jayBteC1sZy1hdXRvIGltZy1mbHVpZFwiXG4gICAgICAgICAgICAgIGFsdD1cIkJvb3RzdHJhcCBUaGVtZXNcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJkaXNwbGF5LTUgZnctYm9sZCBsaC0xIG1iLTNcIj5NZW51IEl0ZW08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+XG4gICAgICAgICAgICAgIFBhcmFncmFwaCBvZiB0ZXh0IGJlbmVhdGggdGhlIGhlYWRpbmcgdG8gZXhwbGFpbiB0aGUgaGVhZGluZy5cbiAgICAgICAgICAgICAgV2UnbGwgYWRkIG9udG8gaXQgd2l0aCBhbm90aGVyIHNlbnRlbmNlIGFuZCBwcm9iYWJseSBqdXN0IGtlZXBcbiAgICAgICAgICAgICAgZ29pbmcgdW50aWwgd2UgcnVuIG91dCBvZiB3b3Jkcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICByZXR1cm4gc2VjdGlvbkNvbnRhaW5lcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlTWVudVBhZ2UsXG4gIH07XG59KSgpO1xuXG4vLyBDb250YWN0IHVzIG1vZHVsZXNcbmNvbnN0IGNvbnRhY3QgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBzZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGAgICAgICBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTQgcHktMVwiIGlkPVwiZmVhdHVyZWQtM1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00IHB5LTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29sLXh4bC04IHB4LTQgcHktMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgtbGctcm93LXJldmVyc2UgYWxpZ24taXRlbXMtY2VudGVyIGctNSBweS01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtc20tOCBjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvcGV4ZWxzLXZpY3Rvci1qdW5nLTk4MzU4Ny5qcGdcIlxuICAgICAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgbXgtbGctYXV0byBpbWctZmx1aWRcIlxuICAgICAgICAgICAgICBhbHQ9XCJCb290c3RyYXAgVGhlbWVzXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGQgbGgtMSBtYi0zXCI+UmVjZXB0aW9uPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkNhbGwgdG8gYXJyYW5nZSBhIGJvb2tpbmcuPC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWFkXCI+IDAxMjM0LTEyMy0xMjMgPC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxlYWRcIj4gZW1haWxAZW1haWwuY29tIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29sLXh4bC04IHB4LTQgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgtbGctcm93LXJldmVyc2UgYWxpZ24taXRlbXMtY2VudGVyIGctNSBweS01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtc20tOCBjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvcGV4ZWxzLXZpY3Rvci1qdW5nLTk4MzU4Ny5qcGdcIlxuICAgICAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgbXgtbGctYXV0byBpbWctZmx1aWRcIlxuICAgICAgICAgICAgICBhbHQ9XCJCb290c3RyYXAgVGhlbWVzXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGQgbGgtMSBtYi0zXCI+SGVhZCBDaGVmPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPkNhbGwgdG8gdGFsayBhYm91dCBmb29kLjwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVhZFwiPiA5ODc2NS05ODctOTg3IDwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWFkXCI+IGNoZWZAY2hlZi5jb20gPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuICAgIHJldHVybiBzZWN0aW9uQ29udGFpbmVyO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlQ29udGFjdFBhZ2UsXG4gIH07XG59KSgpO1xuXG5wYWdlLmFwcGVuZENoaWxkKGhvbWUuY3JlYXRlSG9tZVBhZ2UoKSk7XG5cbmhlYWRlckJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZShoZWFkZXJCdG5zKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKVxuICAgICAgcGFnZS5hcHBlbmRDaGlsZChob21lLmNyZWF0ZUhvbWVQYWdlKCkpO1xuICAgIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiTWVudVwiKVxuICAgICAgcGFnZS5hcHBlbmRDaGlsZChtZW51LmNyZWF0ZU1lbnVQYWdlKCkpO1xuICAgIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiQ29udGFjdFwiKVxuICAgICAgcGFnZS5hcHBlbmRDaGlsZChjb250YWN0LmNyZWF0ZUNvbnRhY3RQYWdlKCkpO1xuICB9KVxuKTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKGJ1dHRvbnMpIHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gXCJuYXYtbGlua1wiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICB3aGlsZSAocGFnZS5maXJzdENoaWxkKSB7XG4gICAgcGFnZS5yZW1vdmVDaGlsZChwYWdlLmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=