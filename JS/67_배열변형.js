let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort());
console.log(nums.reverse());

let fruits = ["apple", "orange", "banana", "melon"];

console.log(fruits.sort());
console.log(fruits.reverse());

let str = fruits.join(); //separator에 아무것도 안쓰면 기본값 ','를 사용해서 분리!
console.log(str);

let str_separator = fruits.join(";");
console.log(str_separator);
let result = str.split(";"); //문자열 분할 메서드
console.log(result);
