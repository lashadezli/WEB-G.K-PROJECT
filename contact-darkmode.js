const darkModeImage = document.getElementById("darkmode");
// landing page
const navbarItems = document.querySelectorAll("#nav-pages a");
const headlinewhite = document.getElementById("headline-white");
const toggle = document.getElementById("toggle");
const person = document.getElementById("person");

darkModeImage.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "";
    // landing page
    navbarItems.forEach((item) => {
      item.style.color = "";
    });

    toggle.style.backgroundImage = "";
    headlinewhite.style.color = "";
    bestseller.style.color = "";

    darkModeImage.src = "/img/dark-theme-svgrepo-com (1).svg";
    person.src = "/img/user-regular.svg";


    // landing page end
  } else {
    document.body.style.backgroundColor = "black";

    navbarItems.forEach((item) => {
      item.style.color = "white";
    });

    headlinewhite.style.color = "white";
    toggle.style.backgroundImage =
      "url(/img/menu-button-of-three-horizontal-lines-svgrepo-com.svg)";

    darkModeImage.src = "/img/white-theme.svg";
    person.src = "/img/whiteperson.png";
    // landing page end
  }
});
