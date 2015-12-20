//Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

function ABCheck(str) {  
  var myAnswer = "";
  for (var x = 0; x < str.length; x++) {
   var strBefore = str[x - 4];
   var strAfter = str[x + 4];
    if (str[x] == "a") {
      if (strBefore == "b" || strAfter == "b") {
        myAnswer = "true";
        break;
      }
    }
    else if (str[x] == "b") {
      if (strBefore == "a" || strAfter == "a") {
        myAnswer = "true";
        break;
      }
    }
    else {
      myAnswer = "false";
    }
  }
  return myAnswer;
}
console.log(ABCheck("Laura sobs"));                                      
                          