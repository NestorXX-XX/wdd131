const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});