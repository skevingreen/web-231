/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Scott Green
      Date: August 22, 2024

      Filename: project02-02.js
 */

// checks whether all fields are filled out and displays appropriate message based on results
function verifyForm() {
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let phone =document.getElementById("phone").value;

  if (name && email && phone) {
    window.alert("Thank you!"); // all fields were filled out
  } else {
    window.alert("Please fill in all fields."); //some data was missing
  }
}

// call verify form when the submit event occurs
document.getElementById("submit").onclick = verifyForm;