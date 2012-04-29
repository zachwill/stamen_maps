// Hide misc elements on the map's page.

var attribution = document.getElementsByClassName("attribution");

for (var i = 0; i < attribution.length; i++) {
  attribution[i].style.display = "none"
}

document.getElementById("header").style.display = "none"
document.getElementById("overlay").style.display = "none"