// Find the first repeating character in a string.

function firstLetter(str) {
  
  // convert str to array
  var strArray = str.split('');
  
  // get length of array for loop
  var strArrayLength = strArray.length;
  
  // create empty array. use this array to push letter from array after it has been looped
  var seenLetters = [];
  
  // loop through length of str
  for (var x = 0; x < strArrayLength; x++) {
    
    // declare variable with value of letter from this time around loop
    var letterThisLoop = strArray[x];
  
    //if letterthisloop has been pushed to array seenLetters return letter
    if(seenLetters.indexOf(letterThisLoop) > -1) {
      return letterThisLoop;
    }
    
    // push letterThisLoop to seenLetters
    seenLetters.push(letterThisLoop);
   
  }
  
}

console.log(firstLetter("Sitzenstatter"));