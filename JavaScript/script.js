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

// Function to prompt user for password options + Validation
function getPasswordOptions() {
  var passwordLength = Number(prompt("Password length 10-64 characters?"));
  if (isNaN(passwordLength) || (passwordLength > 64 || passwordLength < 10)) {
    alert('Invalid password Length'); 
    return getPasswordOptions();
  }

  var passwordLowerCase = confirm("Include lowercase Y/N?");
  var passwordUpperCase = confirm("Include UpperCase Y/N?");
  var passwordNumbers = confirm("Include numbers Y/N?");
  var passwordSpecialCharacters = confirm("Include special characters Y/N?");
  if (!passwordLowerCase && !passwordUpperCase && !passwordNumbers && !passwordSpecialCharacters) {
    alert('Invalid password input'); 
    return getPasswordOptions();
  }

  return {
    passwordLength,
    passwordLowerCase,
    passwordUpperCase,
    passwordNumbers,
    passwordSpecialCharacters,
  };
}

// Function to generate password with user input
function generatePassword(userOptions) {
  // User selects Character types
  var passChars = [];
  if (userOptions.passwordLowerCase) passChars = [...passChars, ...lowerCasedCharacters];
  if (userOptions.passwordUpperCase)
    passChars = [...passChars, ...upperCasedCharacters];
  if (userOptions.passwordNumbers) passChars = [...passChars, ...numericCharacters];
  if (userOptions.passwordSpecialCharacters) passChars = [...passChars, ...specialCharacters];

  // Password Generator
  var randPassword = new Array(userOptions.passwordLength)
    .fill(0)
    .map((x) => passChars[(Math.random() * (passChars.length - 0) + 0).toFixed(0)])
    .join("");
  return randPassword;
}

// Write password to the #password input
function writePassword() {
  var userOptions = getPasswordOptions();
  var randomPassword = generatePassword(userOptions);

  // Regex Character type validator
  var regexString = `(${userOptions.passwordNumbers ? "(?=.*\\d)" : ""}${
    userOptions.passwordLowerCase ? "(?=.*[a-z])" : ""
  }${userOptions.passwordUpperCase ? "(?=.*[A-Z])" : ""}${
    userOptions.passwordSpecialCharacters ? "(?=.*[\\W])" : ""
  }.{${Number(userOptions.passLength)},})`;
  var regexExp = new RegExp(regexString);

  // Regex Character length validator
  var i = 0;
  while (!regexExp.test(randomPassword) && i < 50) {
    randomPassword = generatePassword(userOptions);
    i++;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
