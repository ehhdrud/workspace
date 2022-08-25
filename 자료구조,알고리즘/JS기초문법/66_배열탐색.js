let fruits = ["apple", "orange", "banana", "orange", "melon"];
console.log(fruits.indexOf("orange")); //1
console.log(fruits.indexOf("Orange")); //-1 //존재하지 않는다면 -1이 출력
console.log(fruits.indexOf("orange", 2)); //3 //index 2부터 탐색

console.log(fruits.lastIndexOf("orange")); //3
console.log(fruits.lastIndexOf("orange", -3)); //1 //banana부터 역방향으로 검색
console.log(fruits.lastIndexOf("orange", 0)); //-1 //0을 입력하면 그 역방향으로는 어떠한 orange도 없으므로 -1 출력

console.log(fruits.includes("banana")); //true
console.log(fruits.includes("Banana")); //false
console.log(fruits.includes(0)); //false
