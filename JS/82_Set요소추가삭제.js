let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set); //Set(0) {}
console.log(num); //Set(5) { 1, 2, 3, 4, 5 }
console.log(str); //Set(5) { 'H', 'e', 'l', 'o', '!' } //중복된 값은 제거됨

set.add(1).add(1).add(10).add(20);
console.log(set); //Set(3) { 1, 10, 20 }

console.log(set.has(10)); //true
console.log(set.has(2)); //false

set.delete(1);
set.delete(-1);
console.log(set); //Set(2) { 10, 20 }
