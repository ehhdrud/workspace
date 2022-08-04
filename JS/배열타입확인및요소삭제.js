let num = 123.456;
let str = "here i am";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits));

console.log(fruits);
console.log(fruits.length);

delete fruits[1];
console.log(fruits);
console.log(fruits.length);
