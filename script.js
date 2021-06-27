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

const work = [
  {
    name: "Riimu Games Oy - 3D-artisti",
    duration: "Tammikuu 2020 - Kesäkuu 2020",
    description:
      "Työharjoittelu. 3D-artistin työt, kuten mallintaminen, teksturointi ja animaatio kahden peliprototyypin kehityksessä",
  },
  {
    name: "Maikkulan kirjasto - Työkokeilu",
    duration: "Huhtikuu 2013 - Elokuu 2013",
    description:
      "Asiakaspalvelu, tietopalvelutehtävät, aineiston hyllyttäminen, muut kirjastossa tehtävät työt",
  },
  {
    name: "Netplaza Oy - Siivooja",
    duration: "Syyskuu 2012 - Helmikuu 2013",
    description: "Toimistosiivous",
  },
  {
    name: "Eezy Osk (laskutuspalvelu) - Siivooja",
    duration: "Helmikuu 2012 - Toukokuu 2012",
    description:
      "Matkakeskus Supalle mökkisiivouksia, toimistotöitä ja liinavaatehuoltoa",
  },
  {
    name: "Netplaza Oy - Toimistotyöt",
    duration: "Maaliskuu 2011 - Elokuu 2012",
    description:
      "Keskusaluekarttojen piirtäminen, asiakasrekisterin päivitykset, yritystietojen hakeminen CRM-tietojärjestelmään, taloyhtiökohteiden kiertäminen ja infotaulujen päivittäminen",
  },
  {
    name: "Mantelisilmä ky - Käännöstyöt",
    duration: "2010",
    description: "Englannin kielen käännöstöitä",
  },
];

const volunteerWork = [
  {
    name: "Nuorten Ystävät",
    duration: "Syksy 2017 - Kevät 2018",
    description:
      "Vapaaehtoistyö Nuorten Ystävien Oulun seudun avopalvelukeskuksessa. Musiikkiryhmän ohjaajana toimiminen yhdessä ryhmän vastuuohjaajien kanssa",
  },
];

const contactInfo = [
  {
    platform: "Github",
    url: "github.com/katannamari",
    faIcon: "fab fa-github",
  },
  {
    platform: "LinkedIn",
    url: "linkedin.com/in/katariinavaranka",
    faIcon: "fab fa-linkedin",
  },
];

const languages = [
  {
    language: "suomi",
    competency: "äidinkieli",
  },
  {
    language: "englanti",
    competency: "sujuva",
  },
  {
    language: "ruotsi",
    competency: "tyydyttävä",
  },
];

const skills = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "React Native",
  },
  {
    name: "Blender",
  },
  {
    name: "Krita",
  },
  {
    name: "Figma",
  },
];

// Cv Array loop
let contactMarkup = "";
let langMarkup = "";
let skillsMarkup = "";
let eduMarkup = "";
let workMarkup = "";
let volunteerMarkup = "";

// Contact Array
for (let i = 0; i < contactInfo.length; i++) {
  contactMarkup +=
    "<ul class='cv-item'><li>" +
    contactInfo[i].platform +
    "</li>" +
    "<li class='cv-item-duration'>" +
    contactInfo[i].url +
    "</li></ul>";
}
// Languages Array
for (let i = 0; i < languages.length; i++) {
  langMarkup +=
    "<ul class='cv-item'><li>" +
    languages[i].language +
    "</li>" +
    "<li class='cv-item-description'>" +
    languages[i].competency +
    "</li></ul>";
}
// Skillset Array
for (let i = 0; i < skills.length; i++) {
  skillsMarkup += "<ul class='cv-item'><li>" + skills[i].name + "</li></ul>";
}
// Education Array
for (let i = 0; i < education.length; i++) {
  eduMarkup +=
    "<ul class='cv-item'><li>" +
    education[i].name +
    "</li>" +
    "<li class='cv-item-duration'>" +
    education[i].duration +
    "</li>" +
    "<li class='cv-item-description'>" +
    education[i].description +
    "</li></ul>";
}
// Work experience Array
for (let i = 0; i < work.length; i++) {
  workMarkup +=
    "<ul class='cv-item'><li>" +
    work[i].name +
    "</li>" +
    "<li class='cv-item-duration'>" +
    work[i].duration +
    "</li>" +
    "<li class='cv-item-description'>" +
    work[i].description +
    "</li></ul>";
}
// Volunteer work Array
for (let i = 0; i < volunteerWork.length; i++) {
  volunteerMarkup +=
    "<ul class='cv-item'><li>" +
    volunteerWork[i].name +
    "</li>" +
    "<li class='cv-item-duration'>" +
    volunteerWork[i].duration +
    "</li>" +
    "<li class='cv-item-description'>" +
    volunteerWork[i].description +
    "</li></ul>";
}

document.getElementById("contact").innerHTML = contactMarkup;
document.getElementById("languages").innerHTML = langMarkup;
document.getElementById("skills").innerHTML = skillsMarkup;
document.getElementById("education").innerHTML = eduMarkup;
document.getElementById("work").innerHTML = workMarkup;
document.getElementById("volunteerWork").innerHTML = volunteerMarkup;
