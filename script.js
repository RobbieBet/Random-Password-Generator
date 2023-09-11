// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (My second action - changed any instances of "writePassword" to "generatePassword")
function generatePassword() {

// (Change 1 - Established my sets of characters available for the password)

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+";

//(Change 2 - Added code to establish password length criteria)
  let passwordLength = prompt("Please choose a password length between 8-128 characters! :");

  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8-128 characters!");
    return;
  }

  //Change 4 - Created an empty string for characters and password. Added prompts to ask about using uppercase, lowercase, numeric, and special characters.
  let charPool = '';
  let password = '';

  const useUppercase = confirm("Would you like to use uppercase letters?");
  const useLowercase = confirm("Would you like to use lowercase letters?");
  const useNumeric = confirm("Would you like to use numbers?");
  const useSpecial = confirm("Would you like to use special characters?");

  //Change 5 - Used "if" statements to determine which character types are required, and a notification to the user if they do not choose any character types.
  if (useUppercase) {
    charPool += uppercaseChars;
  }
  if (useLowercase) {
    charPool += lowercaseChars;
  }
  if (useNumeric) {
    charPool += numericChars;
  }
  if (useSpecial) {
    charPool += specialChars;
  }

  if (charPool.length === 0) {
    alert("At least one character type is required!");
    return;
  }

  //Change 6 - Used a "for loop" to generate a password of the desired length. Use math.random to give out a random number, and math.floor to round to a usable number.
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomNumber);}

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
