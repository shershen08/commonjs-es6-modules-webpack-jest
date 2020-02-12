"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adderIfEven = exports.adder = void 0;

// ES6
var adder = function adder(a, b) {
  return a + b;
}; //export default adder2 = (a,b) => a + b;


exports.adder = adder;

var adderIfEven = function adderIfEven(a, b) {
  if (a % 2 === 0 && b % 2 === 0) return a + b;
  return 0;
}; // CommonJS
// const adder = (a,b) => a + b;
// const PI = 3.14
// exports.adder = adder;
// exports.PI = PI;


exports.adderIfEven = adderIfEven;