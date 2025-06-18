// script.js
const links = document.querySelectorAll('.menu a');
const path = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === path) {
    link.classList.add("ativo");
  }
});
