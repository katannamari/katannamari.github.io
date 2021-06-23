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
