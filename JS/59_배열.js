let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1); //[ <10 empty items> ]
console.log(arr_2); //[]

let fruits = ["apple", "orange", "melon"]; 

console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(fruits.length); //3
console.log(fruits[0]); //apple
console.log(fruits[1]); //orange
console.log(fruits[2]); //melon

fruits[1] = "kiwi";
console.log(fruits); //[ 'apple', 'kiwi', 'melon' ]
