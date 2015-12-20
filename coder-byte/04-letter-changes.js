//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 

//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


function LetterChanges(str) {
  // create array with all letters of alphabet
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetArray = alphabet.split('');
  var alphabetArrayLength = alphabetArray.length;
  // create array with all vowels
  var vowels = "aeiou";
  var vowelsArray = vowels.split('');
  var vowelsArrayLength = vowelsArray.length;
  // new variable to hold letter in newStr array
  var myNewLetter = "";
  // new array to hold modified letters
  var newStr = [];
  
  // loop through length of str
  for (var x = 0; x < str.length; x++) {
    // create new variable that holds the x-index character of str
    var strThisLoop = str[x];
    // loop through alphabet
    alphabet_loop:
    for (var y = 0; y < alphabet.length; y++) {
      // create new variable that holds the letter of the alphabet of the loop
      var alphabetLetterThisLoop = alphabetArray[y];
      // if strThisLoop is a letter return the next letter in alphabet
      if (strThisLoop == alphabetLetterThisLoop) {
        myNewLetter = alphabetArray[y + 1];
        // break out of loop
        break alphabet_loop;   
      } 
      else { 
        myNewLetter = strThisLoop;
      }  
    } // close for loop through alphabet
    for (z = 0; z <= 5; z++) {
      var vowelThisLoop = vowels[z];
      if (myNewLetter == vowelThisLoop) {
        // create new variable that turns vowel to uppercase
        var upperCaseVowel = myNewLetter.toUpperCase();
        // assign upperCaseVowel variable to myNewLetter
        myNewLetter = upperCaseVowel;
      }
    }
    // push myNewLetter to array newStr
    newStr.push(myNewLetter);
  } // close for looop through length of str
  var myNewStr = newStr.join("");
  return myNewStr;
}
console.log(LetterChanges("hello*3"));