const photo = document.getElementById("photo");
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const materials = document.querySelector(".materials")
const price = document.querySelector(".price")

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
