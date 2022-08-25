let fruits = ["apple", "orange", "melon"];
let ret;

ret = fruits.push("watermelon");
console.log(fruits); //[ 'apple', 'orange', 'melon', 'watermelon' ]
console.log(ret); //4

ret = fruits.pop();
console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(ret); //watermelon

ret = fruits.shift();
console.log(fruits); //[ 'orange', 'melon' ]
console.log(ret); //apple

ret = fruits.unshift("watermelon");
console.log(fruits); //[ 'watermelon', 'orange', 'melon' ]
console.log(ret); //3
