// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num) { 
  
  var numThisLoop = "";
  var myFinalNum = 0;
  
  // for loop from 1 to num
  for (var x = 1; x <= num; x++) {
    numThisLoop = x;
    myFinalNum = numThisLoop + myFinalNum;
    
  }

  num = myFinalNum;
  
  // code goes here  
  return num; 
         
}

console.log(SimpleAdding(4));