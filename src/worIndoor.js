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
 document.getElementById("filterapply").addEventListener('click', function() {
    modalworfilter.style.display = "none";
    if (document.getElementById("wor-date").value === "1" && document.getElementById("wor-meal").value === "lunch"){
      document.getElementById("wor-menu-soup").innerHTML = "Chicken Noodle Soup<br>Tomato Bisque Soup";
      document.getElementById("wor-menu-grill").innerHTML = "Black Bean Burger<br>French Fries<br>Grass Fed Beef Burger<br>Grilled Chicken Breast<br>Jerk Chicken Thigh<br>Roasted Onions & Peppers<br>Sauteed Broccoli<br>Sweet Potato Fries";
      document.getElementById("wor-menu-desserts").innerHTML = "Rice Krispy Treats<br>Triple Chocolate Cookie";
      document.getElementById("wor-menu-noodle").innerHTML = "Hot and Sour Soup<br>Jiaozi Pork Dumpling";
      document.getElementById("wor-menu-pizza").innerHTML = "Cheese Pizza<br> Pepperoni Pizza";
      document.getElementById("wor-menu-street").innerHTML = "Kimchi Fried Rice<br>Korean BBQ Tofu<br>Korean Gochujang BBQ Ribs<br>Stir Fried Vegetables<br>Vegetable Spring Rolls";
      document.getElementById("wor-menu-tandoor").innerHTML = "Creamy Cucumber Salad<br>Green Tahini Sauce<br>Harissa Braised Zucchini<br>Hummus<br>Lavash Bread<br>Lemon Rice Pilaf<br>Mid East Tomato Salad<br>Moroccan Kefta Brochette (Beef)<br>Sweet Onion Salad";
      document.getElementById("wor-menu-medi").innerHTML = "Braised Pork w/White Beans & Tomatoes<br>Fettuccini Pasta<br>Marinara Sauce<br>Mushroom Cream Sauce<br>Rstd Cauliflower, Salsa Verde & Olives<br>Tortellini w/Basil Pesto & Grape Tomatoes<br>Whole Grain Penne";
      document.getElementById("wor-menu-seasons").innerHTML = "Bean Sprouts<br>Cucumbers, Cubed<br>Miso Glazed Sweet Potato w/Sesame<br>Pumpkin Seeds/Pepitas<br>Scallions<br>Sesame Chili Vinaigrette<br>Sesame Seeds<br>Spicy Miso Eggplant Broccoli Salad<br>Spinach & Garlic<br>Spring Mix<br>Tofu Teriyaki<br>Vegetable Fried Rice";
            
      // if (document.getElementById(vegeCheck).checked = true) {
      //   document.getElementById("wor-menu-soup").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-grill").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-desserts").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-noodle").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-pizza").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-street").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-tandoor").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-medi").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-seasons").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      //   document.getElementById("wor-menu-latino").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      // }
    }
    else if (document.getElementById("wor-date").value === "2" && document.getElementById("wor-meal").value === "lunch") {
      document.getElementById("wor-menu-soup").innerHTML = "Chana Masala Cauliflower Soup<br>Mexican Style Meatball Soup (Pork)";
      document.getElementById("wor-menu-grill").innerHTML = "Black Bean Burger<br>French Fries<br>Grass Fed Beef Burger<br>Grilled Chicken Breast<br>Lemon Pepper Chicken Thigh<br>Roasted Cauliflower<br>Roasted Zucchini<br>Sweet Potato Fries";
      document.getElementById("wor-menu-desserts").innerHTML = "Snickerdoodle Cookies<br>Zebra Brownies";
      document.getElementById("wor-menu-noodle").innerHTML = "Beef Brisket Noodle Bowl";
      document.getElementById("wor-menu-pizza").innerHTML = "Cheese Pizza<br>Pepperoni Pizza";
      document.getElementById("wor-menu-street").innerHTML = "Egg & Tomato Stir Fry<br>San Bei Ji<br>Stir Fried Vegetables<br>Vegetable Lo Mein<br>Vegetable Spring Rolls";
      document.getElementById("wor-menu-tandoor").innerHTML = "African Peri Peri Chicken<br>Chickpea Salad w/Teardrop Peppers & Artichoke Hearts<br>Creamy Cucumber Salad<br>Ethiopian Collard Greens<br>Jollof (West African Tomato Rice)<br>Lavash Bread<br>Sweet Onion Salad";
      document.getElementById("wor-menu-medi").innerHTML = "Cauliflower w/Peppers, Almonds & Chives<br>Garlic Parmesan Cream Sauce<br>Marinara Sauce<br>Roasted Halibut w/Tomatoes & Leeks<br>Spaghetti<br>Tortellini w/Red Pepper Pesto & Artichoke<br>Whole Grain Penne";
      document.getElementById("wor-menu-seasons").innerHTML = "Bean Sprouts<br>Cucumbers, Cubed<br>Roasted Sesame Broccoli<br>Scallions<br>Sesame Chili Vinaigrette<br>Sesame Seeds<br>Spicy Miso Eggplant Broccoli Salad<br>Spring Mix<br>Sunflower Seeds<br>Tofu Teriyaki<br>Vegetable Fried Rice";
      document.getElementById("wor-menu-latino").innerHTML = "Corn & Black Bean Salad<br>Mango & Watermelon Salad<br>Mexican Tomato Salad<br>Mexican Toppings<br>Pinto Beans<br>Pork Pupusas Con Curtido<br>Salvadoran Salsa Roja (Chicken)<br>Yellow Rice";
    }
    else if (document.getElementById("wor-date").value === "2" && document.getElementById("wor-meal").value === "dinner") {
      document.getElementById("wor-menu-soup").innerHTML = "2d";
      document.getElementById("wor-menu-grill").innerHTML = "2d";
      document.getElementById("wor-menu-desserts").innerHTML = "2d";
      document.getElementById("wor-menu-noodle").innerHTML = "2d";
      document.getElementById("wor-menu-pizza").innerHTML = "2d";
      document.getElementById("wor-menu-street").innerHTML = "2d";
      document.getElementById("wor-menu-tandoor").innerHTML = "2d";
      document.getElementById("wor-menu-medi").innerHTML = "2d";
      document.getElementById("wor-menu-seasons").innerHTML = "2d";
      document.getElementById("wor-menu-latino").innerHTML = "2d";
    }
    else if (document.getElementById("wor-date").value === "2" && document.getElementById("wor-meal").value === "late") {
      document.getElementById("wor-menu-soup").innerHTML = "2l";
      document.getElementById("wor-menu-grill").innerHTML = "2l";
      document.getElementById("wor-menu-desserts").innerHTML = "2l";
      document.getElementById("wor-menu-noodle").innerHTML = "2l";
      document.getElementById("wor-menu-pizza").innerHTML = "2l";
      document.getElementById("wor-menu-street").innerHTML = "2l";
      document.getElementById("wor-menu-tandoor").innerHTML = "2l";
      document.getElementById("wor-menu-medi").innerHTML = "2l";
      document.getElementById("wor-menu-seasons").innerHTML = "2l";
      document.getElementById("wor-menu-latino").innerHTML = "2l";
    }
    else if (document.getElementById("wor-date").value === "1" && document.getElementById("wor-meal").value === "dinner") {
      document.getElementById("wor-menu-soup").innerHTML = "1d";
      document.getElementById("wor-menu-grill").innerHTML = "1d";
      document.getElementById("wor-menu-desserts").innerHTML = "1d";
      document.getElementById("wor-menu-noodle").innerHTML = "1d";
      document.getElementById("wor-menu-pizza").innerHTML = "1d";
      document.getElementById("wor-menu-street").innerHTML = "1d";
      document.getElementById("wor-menu-tandoor").innerHTML = "1d";
      document.getElementById("wor-menu-medi").innerHTML = "1d";
      document.getElementById("wor-menu-seasons").innerHTML = "1d";
      document.getElementById("wor-menu-latino").innerHTML = "1d";
    }
    else if (document.getElementById("wor-date").value === "1" && document.getElementById("wor-meal").value === "late") {
      document.getElementById("wor-menu-soup").innerHTML = "1l";
      document.getElementById("wor-menu-grill").innerHTML = "1l";
      document.getElementById("wor-menu-desserts").innerHTML = "1l";
      document.getElementById("wor-menu-noodle").innerHTML = "1l";
      document.getElementById("wor-menu-pizza").innerHTML = "1l";
      document.getElementById("wor-menu-street").innerHTML = "1l";
      document.getElementById("wor-menu-tandoor").innerHTML = "1l";
      document.getElementById("wor-menu-medi").innerHTML = "1l";
      document.getElementById("wor-menu-seasons").innerHTML = "1l";
      document.getElementById("wor-menu-latino").innerHTML = "1l";
    }
  });
window.onclick = function(event) {
    //this causes errors, modal is not defined...
    //if (event.target == modal) {
    //    modalworfilter.style.display = "none";
    //}
  }
document.getElementById("SearchButton").addEventListener("click", ()=>{
    document.getElementById("fi-wor-seasons").src = "image/Highlight.png";
} );
//search functionality
var search = document.getElementById("search-span");
var searchField = document.getElementById("search-text");
// addSearchOptions();
//
// function addSearchOptions(){
//   var stations = document.getElementsByClassName("menu-name");
//   for (const e of stations) {
//     let option = document.createElement("a");
//     option.innerText = e.innerText;
//     option.style.display = "none";
//     search.appendChild(option);
//   }
// }
//
//
// search.addEventListener("keyup", () => {
//   let options = search.children;
//   for (const op of options) {
//     if(op.id === "search-text" || op.tagName === "BUTTON"){
//       continue;
//     }
//
//     let searchText = searchField.value.toLowerCase();
//     let optionText = op.innerText.toLowerCase();
//     if(!optionText.includes(searchText)){
//       op.style.display = "none";
//     }
//     else{
//       op.style.display = "";
//     }
//   }
// });


//filtering
function applyFilter(filter){
  let toFilter = document.getElementsByClassName("menu-item");
  for (const item of toFilter) {
    if(!item.classList.contains(filter)) {
      item.classList.add("hidden");
      item.innerText = "";
    }
  }
}

function clearFilters() {
  resetLatinaMenu();
}

function resetLatinaMenu() {
  const date = document.getElementById("wor-date").value;
  const meal = document.getElementById("wor-meal").value;
  if(date === "1" && meal === "lunch"){
    document.getElementById("wor-menu-latino").innerHTML = '<div class="menu-item lunch vegetarian sustainable whole-grain halal antibiotic-free plant-based">Flour Tortilla</div><div class="menu-item lunch vegetarian sustainable whole-grain halal antibiotic-free plant-based">Black Beans</div><div class="menu-item lunch local halal antibiotic-free">Chicken Fajitas</div><div class="menu-item lunch local sustainable halal antibiotic-free">Chili Lime Melon Salad</div><div class="menu-item lunch vegetarian local sustainable whole-grain halal antibiotic-free plant-based">Mexican Quinoa & Black Bean Salad</div><div class="menu-item lunch vegetarian local sustainable halal antibiotic-free">Mexican Toppings</div><div class="menu-item lunch vegetarian halal antibiotic-free plant-based">Yellow Rice</div><div class="menu-item lunch vegetarian halal antibiotic-free plant-based">Zucchini & Corn</div>';
  }
  else if (date === '2' && meal === 'lunch'){
    document.getElementById("wor-menu-latino").innerHTML = '<div class="menu-item vegetarian sustainable halal antibiotic-free plant-based">Corn & Black Bean Salad</div><div class="menu-item vegetarian sustainable halal antibiotic-free plant-based"">Mango & Watermelon Salad</div><div class="menu-item vegetarian local sustainable halal antibiotic-free plant-based">Mexican Tomato Salad</div><div class="menu-item vegetarian local sustainable halal plant-based">Mexican Toppings</div><div class="menu-item vegetarian sustainable halal antibiotic-free plant-based">Pinto Beans</div><div class="menu-item local sustainable halal antibiotic-free">Pork Pupusas Con Curtido</div><div class="menu-item antibiotic-free">Salvadoran Salsa Roja (Chicken)</div><div class="menu-item vegetarian local halal antibiotic-free plant-based">Yellow Rice</div>'
  }
}

const applyButton = document.getElementById("filterapply");
applyButton.addEventListener('click', applyFilters)
function applyFilters() {

  const idFilter = [
    {id:"vegeCheck", filter:"vegetarian"},
    {id:"localCheck", filter:"local"},
    {id:"susCheck", filter:"sustainable"},
    {id:"wgCheck", filter:"whole-grain"},
    {id:"halalCheck", filter:"halal"},
    {id:"abCheck",filter:"antibiotic-free"},
    {id:"plantCheck",filter:"plant-based"}
  ];
  
  //undo any active filters
  clearFilters();
  idFilter.forEach((e) => {
    const check = document.getElementById(e.id);
    if(check.checked){
      applyFilter(e.filter);
    }
  })  
}


