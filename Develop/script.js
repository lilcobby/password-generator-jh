// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // how many characters
  var passwordLength = prompt(
    "Please enter a numeric response between 8-128 so we can determine your password length?",
    8
  );
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = "";
  }

  let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (confirm("Would you like capital letters?") == false) {
    caps = "";
  }
  // checks if caps var changes
  console.log(caps);

  let low = "abcdefghijklmnopqrstuvwxyz";
  if (confirm("Would you like lowercase letters?") == false) {
    low = "";
  }
  // checks variable change
  console.log(low);
  let num = "0123456789";
  if (confirm("Would you like numbers?") == false) {
    num = "";
  }
  console.log(num);

  let spec = "!@#$%^&*()_+-=[]{};;<>?/,.";
  if (confirm("Would you like special characters?") == false) {
    spec = "";
  }
  var chars = caps + low + num + spec;

  var password2 = "";
  // randomizes the data with math functions
  for (var i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password2 += chars.substring(randomNumber, randomNumber + 1);
  }
  console.log(password2);
  // resets the value of generatePassword function
  return password2;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
