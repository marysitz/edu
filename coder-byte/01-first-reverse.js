//Have function FirstReverse (str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {
  
  // split string into array; each character is equal to an array value
  //reverse string
  // join elements back into string
  var strChanged = str.split('') .reverse().join(""); 
  return strChanged;
 
}

console.log(FirstReverse("I am Mary Ellen Sitzenstatter"));