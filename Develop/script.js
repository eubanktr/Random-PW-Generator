// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLowerSet = 'abcdefghijklmnopqrstuvwxyz';
var charUpperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charSymbSet = '!@#$%^&*()_+';
var charNumSet = '1234567890';
var emptyArr = [];

charLowerSet = charLowerSet.split('');
charUpperSet = charUpperSet.split('');
charSymbSet = charSymbSet.split('');
charNumSet = charNumSet.split('');

console.log(charLowerSet, charUpperSet, charSymbSet, charNumSet);

// Generator Functions

// Write password to the #password input
function writePassword() {
  var pwLength = prompt("How many characters would you like your password to be? (Number must be between 8 and 128).");
  if (pwLength >= 8 && pwLength <= 128) {
    pwUpper = confirm("Would you like to utilize capital letters?");
  }
  else {
    alert("You must chose an Interger between 8 and 128");
    return writePassword();
  }
  if (pwUpper) { 
    emptyArr = emptyArr.concat(charUpperSet);
    pwSpec = confirm("Would you like to utilzie special characters?");
  }
  else {
  pwSpec = confirm("Would you like to utilize special characters");
  }
  if (pwSpec) {
    emptyArr = emptyArr.concat(charSymbSet);
    pwNum = confirm("Would you like to utilize numbers?");
  }
  else {
    pwNum = confirm("Would you like to utilize numbers");
  }
  if (pwNum) {
    emptyArr = emptyArr.concat(charNumSet);
  }
  else{
    return;
  }

function generatePassword() {
  for (i = 0; i < pwLength.length; i++) {
    passwordText =  emptyArr[i = Math.floor(Math.random() * 10)];
  } 
}
console.log(passwordText);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
