
///Script pour menu nav
var activeLi = document.getElementById("nav-Bar");
var elLi = activeLi.getElementsByClassName("li");

for (var i = 0; i < elLi.length; i++) {
  elLi[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


///script pour menu mobile
var activeLiMobile = document.getElementById("menuMobile");
var elLiMobile = activeLiMobile.querySelectorAll("li");

for (var i = 0; i < elLiMobile .length; i++) {
  elLiMobile[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-mobile");
    current[0].className = current[0].className.replace("active-mobile", "");
    this.className += "active-mobile";
  });
}


///script pour le menu burger
function showMenu() {
  var x = document.getElementById("menuMobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var listeMobile = document.getElementById("btnMobile");

listeMobile.addEventListener("click", showMenu);