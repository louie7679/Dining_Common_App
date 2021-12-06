var x = document.getElementById("demo");

window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latitude: " + position.coords.latitude + 
  "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Longitude: " + position.coords.longitude;
}

