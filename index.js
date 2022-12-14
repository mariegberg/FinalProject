document.addEventListener("DOMContentLoaded", init)

function init() {
  document.querySelector(".burger_menu").addEventListener("click", toggleBurgerMenu)

}

function toggleBurgerMenu() {
  console.log(document.querySelector(".burger_container"))
  //  toggle a class to the burger container that changes display:none to display:block or flex or grid
  document.querySelector(".burger_container").classList.toggle("show")
}
