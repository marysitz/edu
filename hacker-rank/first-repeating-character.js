// Find the first repeating letter in a string (case sensitive)

function repeatingLetter(str){
  var newStr = "";
  for (var x = 0; x < str.length; x++) {
    var strLetter = str[x];
    if (newStr.indexOf(strLetter) > -1){
      return strLetter;
    }
    newStr += strLetter;
  }  
}
console.log(repeatingLetter("Grace Hopper Academy"));