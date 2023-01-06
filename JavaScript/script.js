// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLenVal = Number(prompt("Password length 10-65 characters?"));
  if (!isNaN(passLenVal)) 


  var passLowVal = confirm("Include lowercase Y/N?");
  var passUpperVal= confirm("Include UpperCase Y/N?");
  var passNumVal = confirm("Include numbers Y/N?");
  var passSpecVal = confirm("Include special characters Y/N?");

  var passOptions = {
    passLength: prompt("Password length 10-65 characters?"),
    lowChar: confirm("Include lowercase Y/N?"),
    upperChar: confirm("Include UpperCase Y/N?"),
    numericChar: confirm("Include numbers Y/N?"),
    specialChar: confirm("Include special characters Y/N?"),
  };
  return passOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword(userOptions) {
  console.log(userOptions);

  // User selects Character types
  var passChars = [];
  if (userOptions.lowChar)
    passChars = [...passChars, ...lowerCasedCharacters];
  if (userOptions.upperChar)
    passChars = [...passChars, ...upperCasedCharacters];
  if (userOptions.numericChar)
    passChars = [...passChars, ...numericCharacters];
  if (userOptions.specialChar)
    passChars = [...passChars, ...specialCharacters];

      // User selects Password Length
  var passLen = Number(userOptions.passLength);


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userOptions = getPasswordOptions();
  var password = generatePassword(userOptions);

  // Regex Character type validator 
  var regexString = `(${userOptions.numericChar ? '(?=.*\\d)' : ''}${userOptions.lowChar ? '(?=.*[a-z])' : ''}${userOptions.upperChar ? '(?=.*[A-Z])' : ''}${userOptions.specialChar ? '(?=.*[\\W])' : ''}.{${Number(userOptions.passLength)},})`;
  var regexExp = new RegExp(regexString);

  // Regex Character length validator 
  var i = 0;
  while (!regexExp.test(password) && i < 50) {
    password = generatePassword(userOptions);
    i++;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
