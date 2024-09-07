/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Scott Green
      Date: September 4, 2024

      Filename: project03-01.js
*/

// get the collection of HTML elements belonging to the menuItem class
let menuItems = document.getElementsByClassName("menuItem");

// add an event listener to each menuItem in the collection
for (i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// calculate the total of all selected items
function calcTotal() {
  let orderTotal = 0;

  // for every checked item, increase the orderTotal by the selected cost
  for(i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value)
    }

    // display the total of all selected items
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }