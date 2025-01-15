const photo = document.getElementById("photo");
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const materials = document.querySelector(".materials")
const price = document.querySelector(".price")
const darkModeImage = document.getElementById("darkmode");
const person = document.getElementById("person");
const shoename = document.getElementById("shoename")
const blackbutton = document.getElementById("black")
const headlinewhite = document.getElementById("headline-white")
const navbarItems = document.querySelectorAll("#nav-pages a");
const navpages = document.getElementById("nav-pages")
const toggle = document.getElementById("toggle");


d1.addEventListener("click", function () {
  photo.src = "/img/product-1.jpg";
  d1.style.border = "2px solid black"; 
  d2.style.border = "";
  price.style.color = "rgb(255, 115, 0)";
  materials.style.color = "rgb(255, 115, 0)";
});

d2.addEventListener("click", function () {
  photo.src = "/img/product-3.jpg";
  d2.style.border = "2px solid black";
  d1.style.border = ""; 
  price.style.color = "red";
  materials.style.color = "red";
});

darkModeImage.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    navpages.style.backgroundColor = ""
    navbarItems.forEach((item) => {
      item.style.color = "";
    });
    document.body.style.backgroundColor = "";
    darkModeImage.src = "/img/dark-theme-svgrepo-com (1).svg"
    person.src = "/img/user-regular.svg"; 
    toggle.src = "/img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";
    toggle.style.backgroundImage = "";
    shoename.style.color = "";
    blackbutton.style.border = "";
    headlinewhite.style.color = "";
  } else {
    document.body.style.backgroundColor = "black";
    navpages.style.backgroundColor = "black"
    navbarItems.forEach((item) => {
      item.style.color = "white";
    });
    darkModeImage.src = "/img/white-theme.svg"; 
    person.src = "/img/whiteperson.png";
    toggle.style.backgroundImage = "url(/img/menu-button-of-three-horizontal-lines-svgrepo-com.svg)";
    person.style.backgroundImage = "url(/img/icons8-person-24.png)";
    toggle.src = "/img/menu-button-of-three-horizontal-lines-svgrepo-com.svg";
    shoename.style.color = "white";
    blackbutton.style.border = "1px solid white";
    headlinewhite.style.color = "white";

  } 
});
