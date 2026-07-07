const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector("[data-language-toggle]");
const translatedElements = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    heroEyebrow: "Hi, I'm Remi",
    heroTitle: "Frontend Developer Student",
    heroDescription:
      "With a background in digital marketing, I build responsive, user-focused and modern web experiences.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    navAbout: "About",
    navProjects: "Projects",
    navInProgress: "In Progress",
    navSkills: "Skills",
    navCv: "CV",
    navContact: "Contact",

    aboutLabel: "About me",
    aboutTitle: "Frontend, creativity and user experience.",
    aboutTextOne:
      "I’m a frontend development student from Norway with a bachelor’s degree in Digital Marketing. I enjoy combining creativity, problem-solving and user understanding to build intuitive web experiences.",
    aboutTextTwo:
      "My background in marketing has made me especially interested in how design, content and technology work together to affect the user experience.",

    educationTitle: "Education",
    educationText: "Frontend Development Student",
    backgroundTitle: "Background",
    backgroundText: "Bachelor in Digital Marketing",
    locationTitle: "Location",
    locationText: "Norway",
    focusTitle: "Focus",
    focusText: "Frontend Development & UX",
    projectsLabel: "Featured Projects",
    projectsTitle: "Selected school projects",
    viewAllProjects: "View all projects →",

    rainydaysDescription:
      "Responsive e-commerce website for rain jackets, improved with a mobile hamburger menu.",
    rainydaysFocus:
      "Focus: Mobile navigation, responsive layout and usability.",

    gamehubDescription:
      "Online game store with API integration, cart functionality and unique product pages.",
    gamehubFocus:
      "Focus: API integration, cart functionality and product detail pages.",

    museumDescription:
      "Responsive museum website focused on visual consistency, accessibility and clear navigation.",
    museumFocus:
      "Focus: Visual consistency, accessibility and responsive design.",

    liveSite: "Live Site",
    github: "GitHub",

    progressLabel: "In Progress",
    progressTitle: "Projects I’m currently building",

    gamepileDescription:
      "A Letterboxd-inspired platform for gaming where users can rate games, create lists, track backlog and follow activity from other users.",
    gamepileNextStep:
      "Next step: Build authentication, game detail pages and user profiles.",

    mealprepDescription:
      "A meal prep web app where users can browse recipes with calories, macros, ingredients, portions and preparation steps.",
    mealprepNextStep:
      "Next step: Plan the recipe data structure, macro filters and recipe card layout.",

    filmshelfDescription:
      "A personal film collection app where users can log in, add movies, upload cover images and organize their collection.",
    filmshelfNextStep:
      "Next step: Improve edit/delete flow and polish the collection UI.",
    skillsLabel: "Skills & Tools",
    skillsTitle: "Technologies I work with",

    cvLabel: "CV",
    cvTitle: "Want a quick overview?",
    cvText:
      "You can download my CV to see my education, experience and relevant projects.",

    contactLabel: "Contact",
    contactTitle: "Let’s connect",
    contactText:
      "I’m open to frontend opportunities, internships and projects where I can keep learning and contribute.",

    footerText: "© 2026 Remi Ytterdahl. All rights reserved.",
  },

  no: {
    heroEyebrow: "Hei, jeg er Remi",
    heroTitle: "Frontend-student",
    heroDescription:
      "Med bakgrunn i digital markedsføring bygger jeg responsive, brukervennlige og moderne webopplevelser.",
    viewProjects: "Se prosjekter",
    downloadCv: "Last ned CV",
    navAbout: "Om meg",
    navProjects: "Prosjekter",
    navInProgress: "Pågående",
    navSkills: "Ferdigheter",
    navCv: "CV",
    navContact: "Kontakt",

    aboutLabel: "Om meg",
    aboutTitle: "Frontend, kreativitet og brukeropplevelse.",
    aboutTextOne:
      "Jeg er frontend-student fra Norge med bachelorgrad i digital markedsføring. Jeg liker å kombinere kreativitet, problemløsing og brukerforståelse for å bygge intuitive webopplevelser.",
    aboutTextTwo:
      "Bakgrunnen min fra markedsføring har gjort meg spesielt interessert i hvordan design, innhold og teknologi sammen påvirker brukeropplevelsen.",

    educationTitle: "Utdanning",
    educationText: "Frontend-student",
    backgroundTitle: "Bakgrunn",
    backgroundText: "Bachelor i digital markedsføring",
    locationTitle: "Lokasjon",
    locationText: "Norge",
    focusTitle: "Fokus",
    focusText: "Frontend-utvikling og UX",
    projectsLabel: "Utvalgte prosjekter",
    projectsTitle: "Utvalgte skoleprosjekter",
    viewAllProjects: "Se alle prosjekter →",

    rainydaysDescription:
      "Responsiv nettbutikk for regnjakker, forbedret med mobil hamburger-meny.",
    rainydaysFocus:
      "Fokus: Mobilnavigasjon, responsivt design og brukervennlighet.",

    gamehubDescription:
      "Nettbutikk for spill med API-integrasjon, handlekurv og egne produktsider.",
    gamehubFocus:
      "Fokus: API-integrasjon, handlekurv og produktsider.",

    museumDescription:
      "Responsiv museumsnettside med fokus på visuell konsistens, tilgjengelighet og tydelig navigasjon.",
    museumFocus:
      "Fokus: Visuell konsistens, tilgjengelighet og responsivt design.",

    liveSite: "Live side",
    github: "GitHub",

    progressLabel: "Pågående",
    progressTitle: "Prosjekter jeg bygger nå",

    gamepileDescription:
      "En Letterboxd-inspirert plattform for gaming der brukere kan rangere spill, lage lister, følge backlog og se aktivitet fra andre brukere.",
    gamepileNextStep:
      "Neste steg: Bygge innlogging, spillsider og brukerprofiler.",

    mealprepDescription:
      "En meal prep-nettside der brukere kan bla gjennom oppskrifter med kalorier, makroer, ingredienser, porsjoner og fremgangsmåte.",
    mealprepNextStep:
      "Neste steg: Planlegge datastruktur for oppskrifter, makrofiltre og oppskriftskort.",

    filmshelfDescription:
      "En personlig filmsamling-app der brukere kan logge inn, legge til filmer, laste opp coverbilder og organisere samlingen sin.",
    filmshelfNextStep:
      "Neste steg: Forbedre edit/delete-flow og polere samlingssiden.",
    skillsLabel: "Ferdigheter og verktøy",
    skillsTitle: "Teknologier jeg jobber med",

    cvLabel: "CV",
    cvTitle: "Vil du ha en rask oversikt?",
    cvText:
      "Du kan laste ned CV-en min for å se utdanning, erfaring og relevante prosjekter.",

    contactLabel: "Kontakt",
    contactTitle: "La oss ta kontakt",
    contactText:
      "Jeg er åpen for frontend-muligheter, praksisplasser og prosjekter der jeg kan fortsette å lære og bidra.",

    footerText: "© 2026 Remi Ytterdahl. Alle rettigheter reservert.",
  },
};

let currentLanguage = localStorage.getItem("language") || "en";

function updateLanguage(language) {
  translatedElements.forEach((element) => {
    const translationKey = element.dataset.i18n;
    element.textContent = translations[language][translationKey];
  });

  document.documentElement.lang = language;
  languageToggle.textContent = language === "en" ? "NO" : "EN";

  localStorage.setItem("language", language);
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
});

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "no" : "en";
  updateLanguage(currentLanguage);
});

updateLanguage(currentLanguage);