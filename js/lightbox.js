(function () {
  var ImageMenu1 = document.querySelector("#mainmenu1");
  var ImageMenu2 = document.querySelector("#mainmenu2");
  var ImageMenu3 = document.querySelector("#mainmenu3");
  var ImageMenu4 = document.querySelector("#mainmenu4");
  var ImageMenu5 = document.querySelector("#mainmenu5");
  var ImageMenu6 = document.querySelector("#mainmenu6");

  ImageMenu1.addEventListener(
    "click",
    function () {
      ImageMenu1.classList.toggle("lightBox");
    },
    false
  );

  ImageMenu2.addEventListener(
    "click",
    function () {
      ImageMenu2.classList.toggle("lightBox");
    },
    false
  );

  ImageMenu3.addEventListener(
    "click",
    function () {
      ImageMenu3.classList.toggle("lightBox");
    },
    false
  );

  ImageMenu4.addEventListener(
    "click",
    function () {
      ImageMenu4.classList.toggle("lightBox");
    },
    false
  );

  ImageMenu5.addEventListener(
    "click",
    function () {
      ImageMenu5.classList.toggle("lightBox");
    },
    false
  );

  ImageMenu6.addEventListener(
    "click",
    function () {
      ImageMenu6.classList.toggle("lightBox");
    },
    false
  );
})();
