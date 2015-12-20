//Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. 

//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. 

//The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) {
  
  var strArray = str.split('');
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetArray = alphabet.split('');
  var alphabetLength = alphabetArray.length;

  for (var y = 0; y < str.length; y++) {
    var charThisLoop = str[y];
    for (var x = 0; x < alphabetLength; x++) {
      if (charThisLoop == alphabet[x] ) {
        var charBefore = str[y -1];
        var charAfter = str[y + 1];
        if (charBefore == "+" && charAfter == "+"){
         return true; 
        }
        else {
          return false;  
        }
      } 
    }
  }
}  


console.log(SimpleSymbols("+d+=3=+s+"));