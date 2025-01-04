const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(operands) {
	return operands.reduce((total, operand) => total + operand, 0);
};

const multiply = function(factors) {
  return factors.reduce((total, factor) => total * factor, 1);
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	if (a <= 1){
    return 1;
  }
  else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
