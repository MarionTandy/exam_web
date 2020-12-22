

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