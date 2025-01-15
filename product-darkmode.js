const darkModeImage = document.getElementById("darkmode");
const navpages = document.getElementById("nav-pages")
// landing page
const navbarItems = document.querySelectorAll("#nav-pages a");
const headlinewhite = document.getElementById("headline-white");
const toggle = document.getElementById("toggle");
const person = document.getElementById("person");
const bestseller = document.getElementById("bestseller");
const productCards = document.querySelectorAll(".product-card");
const serviceCards = document.querySelectorAll(".services-card");
// product page
const productsheadline = document.querySelectorAll(".headline-product");
const filters = document.querySelectorAll(".filters");
const sale = document.querySelectorAll(".Sale");
// filters toggle
const filtersToggle = document.querySelectorAll(".filters-toggle");

darkModeImage.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    navpages.style.backgroundColor = ""
    document.body.style.backgroundColor = "";
    // landing page
    navbarItems.forEach((item) => {
      item.style.color = "";
    });

    darkModeImage.src = "/img/dark-theme-svgrepo-com (1).svg"
    person.src = "/img/user-regular.svg"; 
    toggle.src = "/img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";

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

    // landing page end

    // product page
    productsheadline.forEach((headline) => {
      headline.style.color = "";
    });

    filters.forEach((filter) => {
      filter.style.backgroundColor = "";
      filter.style.color = "";
      filter.querySelectorAll("*").forEach((item) => {
        item.style.color = "";
      });
    });
    sale.forEach((saleItem) => {
      saleItem.style.backgroundColor = "";
      saleItem.style.color = "";
    });

    filtersToggle.forEach((toggleItem) => {
      toggleItem.style.color = "";
      toggleItem.querySelector("img").style.filter = "";
    });

    // product page end
  } else {
    document.body.style.backgroundColor = "black";
    navpages.style.backgroundColor = "black"


    navbarItems.forEach((item) => {
      item.style.color = "white";
    });

    darkModeImage.src = "/img/white-theme.svg"; 
    person.src = "/img/whiteperson.png";
    headlinewhite.style.color = "white";
    person.style.backgroundImage = "url(/img/icons8-person-24.png)";
    toggle.src = "/img/menu-button-of-three-horizontal-lines-svgrepo-com.svg";

    productCards.forEach((card) => {
      card.style.borderLeft = "1px solid white";
      card.style.borderRight = "1px solid white";
      card.style.borderBottom = "1px solid white";
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

    // landing page end

    // product page
    productsheadline.forEach((headline) => {
      headline.style.color = "white";
    });

    filters.forEach((filter) => {
      filter.style.backgroundColor = "black";
      filter.style.color = "";
      filter.querySelectorAll("*").forEach((item) => {
        item.style.color = "white";
      });
    });

    sale.forEach((saleItem) => {
      saleItem.style.backgroundColor = "#141414";
      saleItem.style.color = "white";
    });

    filtersToggle.forEach((toggleItem) => {
      toggleItem.style.color = "white";
      toggleItem.querySelector("img").style.filter = "invert(1)"; // Inverts the filter image color to white
    });

    // product page end
  }
});

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'selectedshoe.html';
  });
});
