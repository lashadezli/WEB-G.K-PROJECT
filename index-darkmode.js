const darkModeImage = document.getElementById("darkmode");
// landing page
const navbarItems = document.querySelectorAll("#nav-pages a");
const headlinewhite = document.getElementById("headline-white");
const toggle = document.getElementById("toggle");
const bestseller = document.getElementById("bestseller");
const productCards = document.querySelectorAll(".product-card");
const serviceCards = document.querySelectorAll(".services-card");
const productsheadline = document.querySelectorAll(".headline-product");
const person = document.getElementById("person");
const navpages = document.getElementById("nav-pages");
const container = document.querySelector(".container");
const Collection = document.querySelector(".Collection");
const Shopnow = document.querySelector(".shopnow");


darkModeImage.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    container.style.backgroundImage = "url('/img/hero-banner.png')";

    document.body.style.backgroundColor = "";
    navpages.style.backgroundColor = "";
    // landing page
    navbarItems.forEach((item) => {
      item.style.color = "";
    });

    productCards.forEach((card) => {
      card.style.color = "";
      card.querySelectorAll("*").forEach((item) => {
        item.style.color = "";
      });
    });
    serviceCards.forEach((card) => {
      card.style.color = "";
      card.querySelectorAll("*").forEach((item) => {
        item.style.color = "";
      });
    });

    headlinewhite.style.color = "";
    bestseller.style.color = "";
    Collection.style.color = "";
    Shopnow.style.color = "";


    darkModeImage.src = "/img/dark-theme-svgrepo-com (1).svg";
    person.src = "/img/user-regular.svg";
    toggle.src = "/img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";

    // landing page end
  } else {
    document.body.style.backgroundColor = "black";
    navpages.style.backgroundColor = "black";
    container.style.backgroundImage = "url('/img/bg-black1.png')";

    navbarItems.forEach((item) => {
      item.style.color = "white";
    });

    headlinewhite.style.color = "white";
    Collection.style.color = "black";
    Shopnow.style.color = "white";


    productCards.forEach((card) => {
      card.style.border = "1px solid white";
      card.style.color = "white";
      card.querySelectorAll("*").forEach((item) => {
        item.style.color = "white";
      });
    });

    serviceCards.forEach((card) => {
      card.style.color = "white";
      card.querySelectorAll("*").forEach((item) => {
        item.style.color = "white";
      });
    });

    darkModeImage.src = "/img/white-theme.svg";
    person.src = "/img/whiteperson.png";
    toggle.src = "/img/menu-button-of-three-horizontal-lines-svgrepo-com.svg";
    // landing page end
  }
});

document.querySelectorAll(".card, .product-card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "selectedshoe.html";
  });
});
