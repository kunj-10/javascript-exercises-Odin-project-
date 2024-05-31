const convertToCelsius = function(num) {
  let cls = ((num-32)*5)/9;
  return parseFloat(cls.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let frnt = ((num*9)/5)+32;
  return parseFloat(frnt.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
