window.addEventListener("DOMContentLoaded", function() {
  var burgers = document.querySelectorAll(".burger-container");
  for (var i = 0; i < burgers.length; i++) {
    toggle.apply(burgers[i]);
  }

  if (this.checked) {
    for (let i = 0; i < burgers.length; i++) {
      child = burgers[i].children[0];
      child.classList.add(child.id + "-open");
    }
  }
});

function toggle() {
  var menu = this.children[0];
  this.addEventListener("click", function() {
    menu.classList.toggle(menu.id + "-open");
  });
}

/*
    MENU ANIMATION BOUTON
*/

(function() {
  var leBoutonBurger = document.querySelector("#burger2");
  var leMenu = document.querySelector("#menuBurgerAnimation");
  leBoutonBurger.addEventListener(
    "click",
    function() {
      leMenu.classList.toggle("DeplacementMenu");
    },
    false
  );
})(); //Fin IIFE
