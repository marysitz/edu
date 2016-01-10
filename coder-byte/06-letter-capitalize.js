// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 
  var strArray = str.split(" ");
  var arrayValue = "";
  var firstLetterCapitalized = "";
  var newArrayValue;
  var newArrayValueNoFirstLetter;
  var newArray = [];
  
  for (var x = 0; x < strArray.length; x++) {
    arrayValue = strArray[x];
    firstLetterCapitalized = arrayValue[0].toUpperCase();
    newArrayValueNoFirstLetter = arrayValue.slice(1);
    newArrayValue = firstLetterCapitalized + newArrayValueNoFirstLetter;
    newArray.push(newArrayValue);
  }
  var finalArray = newArray.join(" ");
  return finalArray;
}


console.log(LetterCapitalize("mary ellen sitzenstatter"));