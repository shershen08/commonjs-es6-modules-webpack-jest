// ES6
export const adder = (a,b) => a + b;
//export default adder2 = (a,b) => a + b;

export const adderIfEven = (a,b) => {
    if(a % 2 === 0 && b % 2 === 0) return a + b;
    return 0;
}


// CommonJS
// const adder = (a,b) => a + b;
// const PI = 3.14

// exports.adder = adder;
// exports.PI = PI;
