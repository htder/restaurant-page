import { createContactPage as contact } from "./contact.js";
import { createHomePage as home } from "./home.js";
import { createMenuPage as menu } from "./menu.js";

const headerBtns = document.querySelectorAll(".nav-item .nav-link");
const page = document.querySelector(".content");

page.appendChild(home());

headerBtns.forEach((button) =>
  button.addEventListener("click", (event) => {
    removeActive(headerBtns);
    event.target.classList.add("active");
    clearPage();
    console.log(event.target.textContent);
    if (event.target.textContent === "Home") page.appendChild(home());
    if (event.target.textContent === "Menu") page.appendChild(menu());
    if (event.target.textContent === "Contact") page.appendChild(contact());
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
