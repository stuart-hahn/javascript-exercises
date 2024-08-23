const convertToCelsius = function (fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return "ERROR";
  }

  const celsius = parseFloat(((fahrenheit - 32) * (5 / 9)).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function (celsius) {
  if (typeof celsius !== "number") {
    return "ERROR";
  }

  const fahrenheit = parseFloat((celsius * (9 / 5) + 32).toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
