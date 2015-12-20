//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and 

//return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 

//otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function Palindrome(str) { 
  var backwardsStrArray = [];
  var strArray = str.split(" ").join('');
  for (var x = str.length -1; x >= 0; x--) {
    if (str[x] != " "){
      backwardsStrArray.push(str[x]);
    }
  }   
  var backwardsStr  = backwardsStrArray.join('');
  if (strArray == backwardsStr) {
    return "true";
  }
  else {
    return "false";
  }
}
console.log(Palindrome('racecar'));
   