window.onscroll = function () {
   updateProgressBar();
};

function updateProgressBar() {
   var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
   var documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
   var progress = (scrollTop / documentHeight) * 100;
   document.querySelector(".scrollIndex").style.width = progress + "%";
}

console.log("its working")
