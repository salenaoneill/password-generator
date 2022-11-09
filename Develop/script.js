// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Character Arrays
 var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var specialchar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


function generatePassword() {
  //Password length prompt
  var passwordlength = window.prompt("Choose your password length");
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Must be between 8 & 128 characters");
    passwordlength = window.prompt("Choose your password length");
  }

  //Option prompts
  var lowercaseoption = window.confirm("Do you want to include lowercase letters?");
  var uppercaseoption = window.confirm("Do you want to include uppercase letters?");
  var numberoption = window.confirm("Do you want to include numbers?");
  var specialoption = window.confirm("Do you want to include special characters?");

  //Must select one character type
  if (lowercaseoption === false && uppercaseoption === false && numberoption === false && specialoption === false) {
    window.alert("Choose at least one parameter");
  var lowercaseoption = window.confirm("Do you want to include lowercase letters?");
  var uppercaseoption = window.confirm("Do you want to include uppercase letters?");
  var numberoption = window.confirm("Do you want to include numbers?");
  var specialoption = window.confirm("Do you want to include special characters?");
  }
  
  //Concat all character options
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
    allcharacters = allcharacters.concat(specialchar);
  } 

  //For loop to generate password 
  var yourpassword = "";
  for (var i = 0; i < passwordlength; i++) {
    yourpassword = yourpassword + allcharacters[Math.floor(Math.random() * allcharacters.length)];

  }

  return yourpassword;

}





