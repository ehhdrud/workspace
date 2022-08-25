let num = 123.456;
let str = "here i am";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num)); //false
console.log(Array.isArray(str)); //false
console.log(Array.isArray(fruits)); //true

console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(fruits.length); //3

delete fruits[1];
console.log(fruits); //[ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length); //3
