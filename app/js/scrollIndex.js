window.onscroll = function () {
   updateProgressBar();
};

function updateProgressBar() {
   let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
   let documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
   let progress = (scrollTop / documentHeight) * 100;
   document.querySelector(".scrollIndex").style.width = progress + "%";
}
