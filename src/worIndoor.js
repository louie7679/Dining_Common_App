"use strict";

// Wor food icon of seasons
var modalworseasons = document.getElementById("modal-wor-seasons");
var fiworseasons = document.getElementById("fi-wor-seasons");
var span = document.getElementsByClassName("close")[0];
fiworseasons.onclick = function() {
    modalworseasons.style.display = "block";
  }
  span.onclick = function() {
    modalworseasons.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworseasons.style.display = "none";
    }
  }

// Wor food icon of tandoor
var modalwortandoor = document.getElementById("modal-wor-tandoor");
var fiwortandoor = document.getElementById("fi-wor-tandoor");
var span1 = document.getElementsByClassName("close")[1];
fiwortandoor.onclick = function() {
    modalwortandoor.style.display = "block";
  }
  span1.onclick = function() {
    modalwortandoor.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwortandoor.style.display = "none";
    }
  }

// Wor food icon of pizza
var modalworpizza = document.getElementById("modal-wor-pizza");
var fiworpizza = document.getElementById("fi-wor-pizza");
var span2 = document.getElementsByClassName("close")[2];
fiworpizza.onclick = function() {
    modalworpizza.style.display = "block";
  }
  span2.onclick = function() {
    modalworpizza.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworpizza.style.display = "none";
    }
  }

// Wor food icon of desserts
var modalwordesserts = document.getElementById("modal-wor-desserts");
var fiwordesserts = document.getElementById("fi-wor-desserts");
var span3 = document.getElementsByClassName("close")[3];
fiwordesserts.onclick = function() {
    modalwordesserts.style.display = "block";
  }
  span3.onclick = function() {
    modalwordesserts.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwordesserts.style.display = "none";
    }
  }

  // Wor food icon of street food
var modalworstreet = document.getElementById("modal-wor-street");
var fiworstreet = document.getElementById("fi-wor-street");
var span4 = document.getElementsByClassName("close")[4];
fiworstreet.onclick = function() {
    modalworstreet.style.display = "block";
  }
  span4.onclick = function() {
    modalworstreet.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworstreet.style.display = "none";
    }
  }

  // Wor food icon of noodle bowl
var modalwornoodle = document.getElementById("modal-wor-noodle");
var fiwornoodle = document.getElementById("fi-wor-noodle");
var span5 = document.getElementsByClassName("close")[5];
fiwornoodle.onclick = function() {
    modalwornoodle.style.display = "block";
  }
  span5.onclick = function() {
    modalwornoodle.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwornoodle.style.display = "none";
    }
  }

    // Wor food icon of grill station
var modalworgrill = document.getElementById("modal-wor-grill");
var fiworgrill = document.getElementById("fi-wor-grill");
var span6 = document.getElementsByClassName("close")[6];
fiworgrill.onclick = function() {
    modalworgrill.style.display = "block";
  }
  span6.onclick = function() {
    modalworgrill.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworgrill.style.display = "none";
    }
  }

    // Wor food icon of latino
var modalworlatino = document.getElementById("modal-wor-latino");
var fiworlatino = document.getElementById("fi-wor-latino");
var span7 = document.getElementsByClassName("close")[7];
fiworlatino.onclick = function() {
    modalworlatino.style.display = "block";
  }
  span7.onclick = function() {
    modalworlatino.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworlatino.style.display = "none";
    }
  }

  // Wor food icon of medi
var modalwormedi = document.getElementById("modal-wor-medi");
var fiwormedi = document.getElementById("fi-wor-medi");
var span8 = document.getElementsByClassName("close")[8];
fiwormedi.onclick = function() {
    modalwormedi.style.display = "block";
  }
  span8.onclick = function() {
    modalwormedi.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwormedi.style.display = "none";
    }
  }

  // Wor food icon of soup
  var modalworsoup = document.getElementById("modal-wor-soup");
  var fiworsoup = document.getElementById("fi-wor-soup");
  var span9 = document.getElementsByClassName("close")[9];
  fiworsoup.onclick = function() {
      modalworsoup.style.display = "block";
    }
    span9.onclick = function() {
      modalworsoup.style.display = "none";
    }
   window.onclick = function(event) {
      if (event.target == modal) {
          modalworsoup.style.display = "none";
      }
    }

//Filter
var modalworfilter = document.getElementById("modal-wor-filter");
var worfilter = document.getElementById("wor-filter");
worfilter.onclick = function() {
    modalworfilter.style.display = "block";
 }
  document.getElementById("filterapply").onclick = function() {
    modalworfilter.style.display = "none";
    if (document.getElementById("wor-date").value === "1" && document.getElementById("wor-meal").value === "lunch"){
      if (document.getElementById(vegeCheck).checked = true) {
        document.getElementById("wor-menu-soup").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
        document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      }
    }
    else if (document.getElementById("wor-date").value === "2" && document.getElementById("wor-meal").value === "lunch") {
      document.getElementById("wor-menu-soup").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
    }
    else if (document.getElementById("wor-date").value === "2" && document.getElementById("wor-meal").value === "dinner") {
      document.getElementById("wor-menu-soup").innerHTML = "Tantanmen Ramen Bar";
      document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
    }
    else if (document.getElementById("wor-date").value === "2" && document.getElementById("wor-meal").value === "late") {
      document.getElementById("wor-menu-soup").innerHTML = "Tantanmen Ramen Bar";
      document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
    }
    else if (document.getElementById("wor-date").value === "1" && document.getElementById("wor-meal").value === "dinner") {
      document.getElementById("wor-menu-soup").innerHTML = "Tantanmen Ramen Bar";
      document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
    }
    else if (document.getElementById("wor-date").value === "1" && document.getElementById("wor-meal").value === "late") {
      document.getElementById("wor-menu-soup").innerHTML = "Tantanmen Ramen Bar";
      document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
    }
  }
window.onclick = function(event) {
    if (event.target == modal) {
        modalworfilter.style.display = "none";
    }
  }


