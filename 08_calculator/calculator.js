const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let s=0;
	for(let i=0; i<a.length; i++){
    s += a[i];
  }
  return s;
};

const multiply = function(a) {
  let mul=1;
  for(let i=0; i<a.length; i++){
    mul *= a[i];
  }
  return mul;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let fact = 1;
  while(a){
    fact *= a;
    a--;
  }
  return fact;
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
