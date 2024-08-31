/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Scott Green
      Date: August 30, 2024

      Filename: project02-04.js
 */

// Food price and tax constants
const CHICKEN_PRICE = 10.95;

const HALIBUT_PRICE = 13.95;

const BURGER_PRICE = 9.95;

const SALMON_PRICE = 18.95;

const SALAD_PRICE = 7.95;

const SALES_TAX = 0.07;

//Update the totals based on current selections
document.getElementById("chicken").onchange = calcTotal;

document.getElementById("halibut").onchange = calcTotal;

document.getElementById("burger").onchange = calcTotal;

document.getElementById("salmon").onchange = calcTotal;

document.getElementById("salad").onchange = calcTotal;

//Add the total of all purchased items with tax
function calcTotal() {
  let cost = 0;

  //Set the variables to be true or false based on whether the item is checked
  let buyChicken = document.getElementById("chicken").checked;

  let buyHalibut = document.getElementById("halibut").checked;

  let buyBurger = document.getElementById("burger").checked;

  let buySalmon = document.getElementById("salmon").checked;

  let buySalad = document.getElementById("salad").checked;

  //Add the cost of each selected item to cost
  cost += buyChicken ? CHICKEN_PRICE : 0;

  cost += buyHalibut ? HALIBUT_PRICE : 0;

  cost += buyBurger ? BURGER_PRICE : 0;

  cost += buySalmon ? SALMON_PRICE : 0;

  cost += buySalad ? SALAD_PRICE : 0;

  //Display the food sub-total
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  //Calculate the tax
  let tax = cost * SALES_TAX;

  //Display the tax amount for purchase total
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  //Calculate the total price
  let totalCost = cost + tax;

  //Display the total price
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
