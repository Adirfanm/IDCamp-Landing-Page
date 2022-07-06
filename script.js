const nav = document.querySelector("nav");
window.addEventListener("scroll", function (e) {
  if (window.scrollY >= 50) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

const hamburgerMenu = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector("nav ul");
hamburgerMenu.addEventListener("click", function (e) {
  hamburgerMenu.classList.toggle("active");
  if (hamburgerMenu.classList.contains("active")) {
    sidemenu.classList.add("slide");
  } else {
    sidemenu.classList.remove("slide");
  }
});
