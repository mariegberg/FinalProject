document.addEventListener("DOMContentLoaded", init)

function init() {
  document.querySelector(".burger_menu").addEventListener("click", toggleBurgerMenu)

}

function toggleBurgerMenu() {
  console.log(document.querySelector(".burger_container"))
  //  toggle a class to the burger container that changes display:none to display:block or flex or grid
  document.querySelector(".burger_container").classList.toggle("show")
}


/* FAQ SECTION */

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}