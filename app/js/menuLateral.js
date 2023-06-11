const btnMenu = document.querySelector(".openMenu");
const lateralNav = document.querySelector(".lateralNav");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");

btnMenu.addEventListener("click", function () {
   lateralNav.classList.toggle("opened");
   overlay.classList.toggle("show");
   header.classList.toggle("opened");

   console.log(overlay);
});
