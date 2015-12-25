function ArithGeo(arr) { 
  var arrLength = arr.length;
  var arrThisLoop = "";
  var arrLastLoop = "";
  var arrArray = [];
  var arithFinal;
  function identicalArith() {
    for(var i = 0; i < arrArray.length - 1; i++) {
      if(arrArray[i] != arrArray[i + 1]) {
      return "-1";
      }
    }
    return "Arithmetic";
  }
  for (var x = arr.length - 1 ; x >= 0; x--) {
    arrThisLoop = arr[x];
    arrArray.push(arrLastLoop - arrThisLoop);
    arrLastLoop = arrThisLoop;
  }
  arrArray.shift();
  arithFinal = identicalArith(arrArray);
  if (arithFinal == "-1") {
    for (var z = 0 ; z < arrLength - 1; z++) {
      var geoRatio = arr[z] / arr[z + 1];
      if (geoRatio == geoRatioPrevious) {
        return "Geometric";
      }
      var geoRatioPrevious = geoRatio; 
    }
  }
  else {
    return arithFinal;
  }
  return "-1";
}
   
console.log(ArithGeo([2,4,6,8]));