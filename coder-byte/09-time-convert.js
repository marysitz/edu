//Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

function TimeConvert(num) { 
  var hoursWithDecimal = num / 60;
  var hours = hoursWithDecimal.toString().split(".")[0];
  var minutes = num % 60;
  num = hours + ":" + minutes;
  return num;         
}
console.log(TimeConvert(126));