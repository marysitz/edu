//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 

//If there are two or more words that are the same length, return the first word from the string with that length. 

//Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) {
  
  // split string into array and declare variable with its length
  var arrayOfString = sen.split(' ');
  var senForLoop = arrayOfString.length;
  
  //create variable to hold largest word
  var largestWordInLoop = "";

  //for loop through length of array
  for (var x = 0; x < senForLoop; x++) {
    //create variable to hold word for this loop
    var wordThisLoop = arrayOfString[x];
    
    // compare lengths of word this loop and word stored as largest
    if (wordThisLoop.length > largestWordInLoop.length) {
      
      // if wordThisLoop is longer assign value of that word to largestWordInLoop
      largestWordInLoop = wordThisLoop;
    }
  }
  
 return largestWordInLoop;

}

console.log(LongestWord("Mehta Sitzenstatter LllenSitzenstatter Partivit Ricotta EllenSitzenstatter"));