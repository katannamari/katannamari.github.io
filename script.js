// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".menu");

// Toggle mobile menu
const toggleMenu = () => {
  if (mainMenu.classList.contains("is-toggled")) {
    mainMenu.classList.remove("is-toggled");

    // adds the menu icon
    menuToggle.innerHTML = "<i class='fas fa-bars'></i>";
    menuToggle.setAttribute("aria-label", "Avaa valikko");
  } else {
    mainMenu.classList.add("is-toggled");

    // adds the close icon
    menuToggle.innerHTML = "<i class='fas fa-times'></i>";
    menuToggle.setAttribute("aria-label", "Sulje valikko");
  }
};

menuToggle.addEventListener("click", toggleMenu, false);

// SCROLL BUTTON

const scrollButton = document.getElementById("scroll-button");

window.onscroll = function () {
  scrollVisibility();
};

// Checks the position of the scroll and whether to show the button
const scrollVisibility = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Takes user to top of the page when clicking the button
const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

// CV-DATA

const education = [
  {
    name: "Oulun Ammattikorkeakoulu - Tradenomi (AMK)",
    duration: "2017 - 2021",
    description: "Tietojenkäsittelyn koulutusohjelma",
  },
  {
    name: "Utajärven lukio",
    duration: "2007-2010",
    description: "Ylioppilastutkinto",
  },
];

let i, len, text;

for (i = 0, len = education.length, text = ""; i < len; i++) {
  text +=
    "<ul class='cv-item'><li>" +
    education[i].name +
    "</li>" +
    "<li class='cv-item-duration'>" +
    education[i].duration +
    "</li>" +
    "<li class='cv-item-description'>" +
    education[i].description +
    "</li></ul>";
  console.log(education);
}

document.getElementById("education").innerHTML = text;
