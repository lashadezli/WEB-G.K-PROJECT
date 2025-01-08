document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".toggle");
    const navPages = document.querySelector(".nav-pages");

    menuToggle.addEventListener("click", () => {
      navPages.classList.toggle("open");
    });
  });