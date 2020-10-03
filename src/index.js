exports.min = function min (array) {
  if (array == undefined || array.length == 0 ) { 
    return Number(0);
}
else {
  let minimumNumber = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < minimumNumber) {
          minimumNumber = array[i];
          }
        }
            return minimumNumber;
          }}

          
exports.max = function max (array) {
    if (array == undefined || array.length == 0 ) { 
      return Number(0);
  }
  else {
    let maximumNumber = array[0];
      for (var i = 1; i < array.length; i++) {
          if (array[i] > maximumNumber) {
            maximumNumber = array[i];
            }
          }
              return maximumNumber;
            }}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0 ) { 
    return Number(0);
}
else {
    let arraySum = array[0];
    for (var i = 1; i < array.length; i++) {
      arraySum = array[i] + arraySum;
    }
    let arrayAvg = arraySum / (i);
    return arrayAvg;
    }}
