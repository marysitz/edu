// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
function chessBoard(num){
  var board = "";
  for (var y = 0; y < num; y++) {
    var secondStart;
    if (y % 2 !== 0) {
      secondStart = 1; 
    }
    else {
      secondStart = 0;
    }
    for (secondStart; secondStart <= num; secondStart++) {
      if (secondStart == num) {
        board += "\n";
      }
      if (secondStart % 2 !== 0) {
        board += "#";
      }
      else {
        board += " ";
      }  
    }    
  }
  return board;
}
console.log(chessBoard(30));