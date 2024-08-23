const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => (total *= num), 1);
};

const power = function (num1, power) {
  return num1 ** power;
};

const factorial = function (num) {
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return 1;
  }
  let total = 1;
  do {
    total *= num;
    num--;
  } while (num > 0);
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
