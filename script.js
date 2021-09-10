// Checks the language of document bc it's needed for correct cv data display
const isEnglish = document.querySelector("html").getAttribute("lang") == "en";

// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".menu");
const menuLinks = mainMenu.querySelectorAll("a");

// Toggle mobile menu

const openMenu = () => {
  mainMenu.classList.add("is-toggled");

  // adds the close icon
  menuToggle.innerHTML = "<i class='fas fa-times'></i>";
  menuToggle.setAttribute("aria-label", "Sulje valikko");
};
const closeMenu = () => {
  mainMenu.classList.remove("is-toggled");
  // adds the menu icon
  menuToggle.innerHTML = "<i class='fas fa-bars'></i>";
  menuToggle.setAttribute("aria-label", "Avaa valikko");
};

const toggleMenu = () => {
  if (mainMenu.classList.contains("is-toggled")) {
    closeMenu();
  } else {
    openMenu();
  }
};

// Loop through all menu links and check for click event,
// in which case mobile menu is closed
for (let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i];
  link.addEventListener("click", () => {
    if (mainMenu.classList.contains("is-toggled")) {
      closeMenu();
    }
  });
}

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
const educationEN = [
  {
    name: "Oulu University of Applied Sciences",
    duration: "2017 - 2021",
    description: "Information Technology",
  },
  {
    name: "Utajärvi Upper Secondary School",
    duration: "2007-2010",
    description: "Matriculation examination",
  },
];

const work = [
  {
    name: "Cinia Oy - Tietoverkkojen dokumentoija",
    duration: "Syyskuu 2021 -",
    description:
      "Tietojen tarkistaminen ja päivittäminen yhtiön verkkotietojärjestelmässä.",
  },
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

const workEN = [
  {
    name: "Cinia Ltd - Network documentation",
    duration: "September 2021 -",
    description:
      "Verifying and updating information in the company's network database.",
  },
  {
    name: "Riimu Games Ltd - 3D Artist",
    duration: "January 2020 - June 2020",
    description:
      "Internship. Working with 3D modeling, texturing and animation in two game prototypes.",
  },
  {
    name: "Maikkula Library - Work try-out",
    duration: "April 2013 - August 2013",
    description: "Customer service, information service, shelving materials",
  },
  {
    name: "Netplaza Ltd - Cleaner",
    duration: "September 2012 - February 2013",
    description: "Office cleaning",
  },
  {
    name: "Eezy - Cleaner",
    duration: "February 2012 - May 2012",
    description: "Cabin cleaning and office work for Travel Center Suppa",
  },
  {
    name: "Netplaza Ltd - Office work",
    duration: "March 2011 - August 2012",
    description:
      "Drawing up maps, updating customer registry, updating CRM database with new enterprise data, updating customer apartment buildings' info boards",
  },
  {
    name: "Mantelisilmä LP - Translating",
    duration: "2010",
    description: "English translation work",
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
const volunteerWorkEN = [
  {
    name: "Nuorten Ystävät",
    duration: "Autumn 2017 - Spring 2018",
    description:
      "Vapaaehtoistyö Nuorten Ystävien Oulun seudun avopalvelukeskuksessa. Musiikkiryhmän ohjaajana toimiminen yhdessä ryhmän vastuuohjaajien kanssa",
    description:
      "Volunteer work at Nuorten Ystävät's Kintas unit, which is a mental health rehabilitation center for young adulta. Working as a peer tutor in a music group together with councelors.",
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
const languagesEN = [
  {
    language: "Finnish",
    competency: "Native language",
  },
  {
    language: "English",
    competency: "Fluent",
  },
  {
    language: "Swedish",
    competency: "Intermediate",
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

// Function gets cv data and creates html markup based on it,
// prints it in the correct spot based on id
const createMarkup = (data, id) => {
  let markup = "";
  const element = document.querySelector(`#${id}`);

  for (let i = 0; i < data.length; i++) {
    markup += '<ul class="cv-item">';
    // Ternary operator to check which cv data is being processed and what to print
    markup += data[i].platform
      ? `<li class="cv-item"><a href="https://${data[i].url}" target="_blank" rel="noopener noreferrer"><i class="${data[i].faIcon}"></i> ${data[i].url}</a></li>`
      : "";
    markup += data[i].language
      ? `<li class="cv-item">${data[i].language} - ${data[i].competency}</li>`
      : "";
    markup += data[i].name
      ? `<li class="cv-item cv-item-name">${data[i].name}</li>`
      : "";
    markup += data[i].duration
      ? `<li class="cv-item-duration">${data[i].duration}</li>`
      : "";
    markup += data[i].description
      ? `<li class="cv-item-description">${data[i].description}</li>`
      : "";
    markup += "</ul>";
  }

  element.innerHTML = markup;
};

// Ternary operator checks doc language and displays correct cv markup
createMarkup(contactInfo, "contact");
createMarkup(isEnglish ? languagesEN : languages, "languages");
createMarkup(skills, "skills");
createMarkup(isEnglish ? educationEN : education, "education");
createMarkup(isEnglish ? workEN : work, "work");
createMarkup(isEnglish ? volunteerWorkEN : volunteerWork, "volunteerWork");

// FOOTER

const countYear = () => {
  const year = new Date().getFullYear();
  const element = document.querySelector("#copyright");

  element.innerHTML = year;
};

countYear();
