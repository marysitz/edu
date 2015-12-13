//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

function FirstFactorial(num) {

  //declare variable to hold number values
  var finalNumber = 1;

  //reverse loop starting with num and moving down
  for (var x = num; x > 0; x--) {
    
    // create factorial
    finalNumber = finalNumber * x;
  }
  return finalNumber;

}

console.log(FirstFactorial(5));
//120
