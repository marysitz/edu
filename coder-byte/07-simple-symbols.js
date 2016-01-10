// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. 

//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. 

//The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) { 
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var loopValue;
  var finalValue = 0;
  for (var x = 0; x < str.length; x++) {
    loopValue = str[x];
    var isLetter = alphabet.indexOf(loopValue);
    if (isLetter > -1){
      if (str[x - 1] === "+" && str[x + 1] === "+"){
        finalValue += 1;
      }
      else {
        return false;
      }
    }
  }
  if (finalValue >= 1) {
    return true;
  }
}

console.log(SimpleSymbols("f++d+"));