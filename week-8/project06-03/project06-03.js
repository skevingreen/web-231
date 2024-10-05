"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Scott Green
      Date: October 5, 2024

      Filename: project06-03.js
*/

// Get the useShip checkbox
let useShip = document.getElementById("useShip");

// Set up an event handler to copy shipping info to billing info
useShip.onclick = copyShippingToBilling;

// Copy shipping address information to billing address information
function copyShippingToBilling() {
  if (useShip.checked) {
    let billShipForm = document.forms.billShip; // Get the billShip form

    billShipForm.firstnameBill.value = billShipForm.firstnameShip.value;
    billShipForm.lastnameBill.value = billShipForm.lastnameShip.value;
    billShipForm.address1Bill.value = billShipForm.address1Ship.value;
    billShipForm.address2Bill.value = billShipForm.address2Ship.value;
    billShipForm.cityBill.value = billShipForm.cityShip.value;
    billShipForm.countryBill.value = billShipForm.countryShip.value;
    billShipForm.codeBill.value = billShipForm.codeShip.value;
    billShipForm.stateBill.selectedIndex = billShipForm.stateShip.selectedIndex;
  }
}

// Get the text input fields
let formElements = document.querySelectorAll("input[type='text']");

// Get the number of formElements
let fieldCount = formElements.length;

// Find the errorBox output paragraph
let errorBox = document.getElementById("errorBox");

// Add an event listener to each input field for when they are invalid
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError)
}

// Suppress the built in error validation bubble and display custom error text instead
function showValidationError(evt) {
  evt.preventDefault();

  errorBox.textContent = "Complete all highlighted fields";
}

