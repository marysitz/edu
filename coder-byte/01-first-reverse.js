//Have function FirstReverse (str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {
  
  var strChanged = str.split('') // split string into array; each character is equal to an array value
  						        .reverse() //reverse string
                      .join(""); // join elements back into string
  return strChanged;
 
}

console.log(FirstReverse("I am Mary Ellen Sitzenstatter"));