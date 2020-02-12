"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// ES6
var adder = exports.adder = function adder(a, b) {
    return a + b;
};
//export default adder2 = (a,b) => a + b;

var adderIfEven = exports.adderIfEven = function adderIfEven(a, b) {
    if (a % 2 === 0 && b % 2 === 0) return a + b;
    return 0;
};

// CommonJS
// const adder = (a,b) => a + b;
// const PI = 3.14

// exports.adder = adder;
// exports.PI = PI;