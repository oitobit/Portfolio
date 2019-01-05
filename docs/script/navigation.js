window.onscroll = function() {
    myFunction()
    scrollFunction()
};
        
var navMenu = document.getElementById("navMenu");
var sticky = navMenu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navMenu.classList.add("sticky")
    } else {
    navMenu.classList.remove("sticky");
    }
}

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("topcontrole").style.display = "block";
  } else {
    document.getElementById("topcontrole").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}