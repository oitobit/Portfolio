window.onscroll = function() {myFunction()};
        
var navMenu = document.getElementById("navMenu");
var sticky = navMenu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navMenu.classList.add("sticky")
    } else {
    navMenu.classList.remove("sticky");
    }
}