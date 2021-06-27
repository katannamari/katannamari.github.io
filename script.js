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

// CV-DATA ARRAY
