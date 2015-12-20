//Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string 

//true if there is an equal number of x's and o's, 
//otherwise return the string false. 

//Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

function ExOh(str) { 
  var x = "x";
  var o = "o";
  var xArray = [];
  var oArray = [];
  for (var y = 0; y < str.length; y++) {
    if (str[y] == x) {
      xArray.push(str[y]);
    }
    else if (str[y] == o) {
      oArray.push(str[y]);
    }
  }
  if (xArray.length == oArray.length) {
    return true;
  }
  else {
    return false;
  }         
}   
console.log(ExOh("xooxxxxooxo"));                            