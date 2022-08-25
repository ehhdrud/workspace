let us = 1e-6;

console.log(us.toString()); //0.000001
console.log(typeof us.toString()); //string
console.log(typeof String(us)); //string
console.log(typeof (us + "")); //string //괄호처리 해줘야 함

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2); //1.543999999999997
console.log((num_1 - num_2).toFixed(3)); //1.544
console.log((num_1 - num_2).toPrecision(3)); //1.54
