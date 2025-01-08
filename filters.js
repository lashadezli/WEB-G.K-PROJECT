document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.querySelector(".filters-toggle");
  const filterDisplay = document.querySelector(".filters");
  const closeBtn = document.querySelector(".close-btn");

  filterToggle.addEventListener("click", () => {
    filterDisplay.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    filterDisplay.classList.remove("open");
  });
});
