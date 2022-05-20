// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%^"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to generate password to be written to #password input
function generatePassword() {
  var finalPass = "";

  var size = prompt("Please eneter 8 to 128 characters");

  // if size of password is between or equals 8-128 characters, execute following
  if (size >= 8 && size <= 128) {

    // declare prompts to be checked in for loop
    var isUpper = confirm("Include uppercase?");
    var isLower = confirm("Include lowercase?");
    var isNumber = confirm("Include number?");
    var isSpecial = confirm("Include special characters?");

    // repeats every true statement below same number of times as the specified size
    for (var i = 0; i < size; i++) {

      if (isUpper === true) {
        var positionString = Math.floor(Math.random() * uppercase.length);
        finalPass += uppercase[positionString];
      }

      if (isLower === true) {
        var positionString = Math.floor(Math.random() * lowercase.length);
        finalPass += lowercase[positionString];
      }

      if (isNumber === true) {
        var positionString = Math.floor(Math.random() * number.length);
        finalPass += number[positionString];
      }

      if (isSpecial === true) {
        var positionString = Math.floor(Math.random() * special.length);
        finalPass += special[positionString];
      }
    }

    // reassign finalPass to a jumbled version of itself
    finalPass = finalPass.split('').sort(function () { return 0.5 - Math.random() }).join('');

    // if finalPass length is larger than size, slice off first chunk of elements from start to specified size
    if (finalPass.length > size) {
      finalPass = finalPass.slice(0, size);
    }

    // otherwise (to line 25 if) output following
  } else {
    alert("Invalid entry");
  }

  return finalPass;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);



/*PSUEDO CODE

  step 1: when button is clicked, series of prompts for password criteria are presented

  prompts:
  step 2: allow user to select password size
  step 3: allow user to choose character types (upper/lowercase, numeric, and/or special characters)
  step 4: notify user to select at least 1 character type if not selected

  step 5: password is generated after user answers all prompts
  step 6: generated password is displayed to user in alert or in page
*/