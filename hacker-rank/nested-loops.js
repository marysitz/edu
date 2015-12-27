// Create the function 'rightTriangle', it returns a string representing a right triangle using '*'. The number argument represents the number of rows the triangle will have. 

// Sample output: 
	// A function call of rightTriangle(2) returns "++\n*"
	// A function call of rightTriangle(4) returns "****\n***\n**\n*"

function rightTriangle(rows){
  var triangleRows = "";
  var secondLoop = rows;
  // first loop: height of triangle
  for (var x = rows; x > 0; x--) {
    secondLoop--;
    // second loop: decreasing number of *s in row
    for (var y = secondLoop + 1; y >= 0; y--) {
      if (y === 0){
        triangleRows += "\n";
      }
      else {
        triangleRows += "*";
      }
    }
  } 
  return triangleRows;
}
console.log(rightTriangle(5));

