(function () {
  var ImageMenu = document.querySelector("#mainmenu");

  ImageMenu.addEventListener(
    "click",
    function () {
      ImageMenu.classList.toggle("lightBox");
    },
    false
  );

  var ImageMenu2 = document.querySelector("#mainmenu2");

  ImageMenu2.addEventListener(
    "click",
    function () {
      ImageMenu2.classList.toggle("lightBox");
    },
    false
  );
})();
