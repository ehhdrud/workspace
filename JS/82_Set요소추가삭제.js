let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set);
console.log(num);
console.log(str); //Output: Set(5) { 'H', 'e', 'l', 'o', '!' } -> 중복된 값은 제거됨!

set.add(1).add(1).add(10).add(20);
console.log(set);

console.log(set.has(10));
console.log(set.has(2));

set.delete(1);
set.delete(-1);
console.log(set);
