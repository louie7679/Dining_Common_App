"use strict";

// Wor food icon of green
var modalworgreen = document.getElementById("modal-wor-green");
var fiworgreen = document.getElementById("fi-wor-green");
var span = document.getElementsByClassName("close")[0];
fiworgreen.onclick = function() {
    modalworgreen.style.display = "block";
  }
  span.onclick = function() {
    modalworgreen.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworgreen.style.display = "none";
    }
  }

