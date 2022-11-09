// Assignment Code
var generateBtn = document.querySelector("#generate"); 

//Character Arrays
 var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var specialchar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //Password length prompt
  var passwordlength = window.prompt("Choose your password length");
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Must be between 8 & 128 characters");
    passwordlength = window.prompt("Choose your password length");
  }

  //Option prompts
  var lowercaseoption = window.alert("Do you want to include lowercase letters?");
  var uppercaseoption = window.alert("Do you want to include uppercase letters?");
  var numberoption = window.alert("Do you want to include numbers?");
  var specialoption = window.alert("Do you want to include special characters?");


  var allcharacters = []
if (lowercaseoption) {
  allcharacters = allcharacters.concat(lowercase);
}
if (uppercaseoption) {
  allcharacters = allcharacters.concat(uppercase);
}
if (numberoption) {
  allcharacters = allcharacters.concat(numbers); 
}
if (specialoption) {
  allcharacters = allcharacters.concat(specialChar);
} 

//For loop to generate password 
for (var i = 0; i < passwordlength; i++) {
  
}

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

