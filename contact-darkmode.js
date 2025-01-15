const darkModeImage = document.getElementById("darkmode");
const navbarItems = document.querySelectorAll("#nav-pages a");
const headlinewhite = document.getElementById("headline-white");
const toggle = document.getElementById("toggle");
const person = document.getElementById("person");
const navpages = document.getElementById("nav-pages")

darkModeImage.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "";
    navpages.style.backgroundColor = ""
    // landing page
    navbarItems.forEach((item) => {
      item.style.color = "";
    });

    headlinewhite.style.color = "";

    darkModeImage.src = "/img/dark-theme-svgrepo-com (1).svg";
    person.src = "/img/user-regular.svg";
    toggle.src = "/img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";


    // landing page end
  } else {
    document.body.style.backgroundColor = "black";
    navpages.style.backgroundColor = "black"

    navbarItems.forEach((item) => {
      item.style.color = "white";
    });

    headlinewhite.style.color = "white";

    darkModeImage.src = "/img/white-theme.svg";
    person.src = "/img/whiteperson.png";
    toggle.src = "/img/menu-button-of-three-horizontal-lines-svgrepo-com.svg";
    // landing page end
  }
});
