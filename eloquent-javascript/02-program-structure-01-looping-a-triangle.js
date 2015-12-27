// Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(num) {
  var myTriangle = "";
  for (var x = 1; x <= num; x++) {
    console.log(myTriangle += "#");
  }
}
triangle(7);