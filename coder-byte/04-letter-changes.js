// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterChanges(str) {
  
  // take string and make array with word as value
  var strArray = str.split(" ");

  // get length of string word array
  var strArrayLength = strArray.length;
 
  // create new empty array
  var capArray = [];
  
  // for loop through length of array
  for (var x = 0; x < strArrayLength; x++) {
    
    // declare variable for word of array
    var wordOfArray = strArray[x];
    
    // apply toUpperCase method on 0 index of all words in array
    var capitalizedLetter = wordOfArray[0].toUpperCase();
  
    //remove first letter from wordOfArray
    var myNewWord = wordOfArray.slice(1);
    
    // create new word with capitalized letter
    wordOfArray = capitalizedLetter + myNewWord;

    // push word with uppercase to new array
    capArray.push(wordOfArray);
  }  
  
  // return new array and join
  str = capArray.join(" ");
  return str;
}


console.log(LetterChanges("mary sitzenstatter is my name"));
