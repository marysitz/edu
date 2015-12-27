// need to rewrite this! the first and second lines are identical.

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