let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); //[ -1, 0, 1, 2, 4, 5 ]
console.log(nums.reverse()); //[ 5, 4, 2, 1, 0, -1 ]

let fruits = ["apple", "orange", "banana", "melon"];

console.log(fruits.sort()); //[ 'apple', 'banana', 'melon', 'orange' ]
console.log(fruits.reverse()); //[ 'orange', 'melon', 'banana', 'apple' ]

let str = fruits.join(); //separator에 아무것도 안쓰면 기본값 ','를 사용해서 분리
console.log(str); //orange,melon,banana,apple

let str_separator = fruits.join(";"); //';'를 사용해서 분리
console.log(str_separator); //orange;melon;banana;apple

let result = str.split(";"); //문자열 분할 메서드
console.log(result); //[ 'orange,melon,banana,apple' ]
