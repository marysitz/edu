// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 

// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCountI(str){
  // remove special characters from string
  str = str.replace(/[&\!/\\#,+()$~%.:*?<>{}]/g, '');
  var strNew = [];
  // str to array
  var strArray = str.split(' ');
  // loop through each word of array
  for (var x = 0; x < strArray.length; x++) {
    var newWord = "";
    // declare variable for each word of strArray
    var strArrayWord = strArray[x];
    // loop through each letter of each word of strArray
    for (var y = 0; y < strArrayWord.length; y++) {
      // declare variable for letter this loop
      var letterThisLoop = strArrayWord[y];
      // use indexOf to determine if letter has been repeated 
      if (newWord.indexOf(letterThisLoop) > -1) {
         return strArray[x];
      }
      newWord += letterThisLoop;
    }
    strNew.push(newWord);
  }
  return -1;
}
console.log(LetterCountI("Today, is the greatest day ever!"));