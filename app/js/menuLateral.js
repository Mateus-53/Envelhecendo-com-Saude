const btnMenu = document.querySelector(".openMenu");
const lateralNav = document.querySelector(".lateralNav");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const scrollIndex = document.querySelector(".scrollIndex");

const menuElements = [btnMenu, overlay];

menuElements.forEach((element) => {
   element.addEventListener("click", function () {
      lateralNav.classList.toggle("opened");
      overlay.classList.toggle("show");
      header.classList.toggle("opened");
      scrollIndex.classList.toggle("opened");

      console.log(overlay);
   });
});

/*btnMenu.addEventListener("click", function () {
   lateralNav.classList.toggle("opened");
   overlay.classList.toggle("show");
   header.classList.toggle("opened");
   scrollIndex.classList.toggle("opened");

   console.log(overlay);
});
*/