let us = 1e-6;

console.log(us.toString());
console.log(typeof us.toString());
console.log(typeof String(us));
console.log(typeof (us + "")); //괄호처리해줘야함...안하면 output:number...

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(3));
console.log((num_1 - num_2).toPrecision(3));
