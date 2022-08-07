let fruits = ["apple", "orange", "banana", "orange", "melon"];
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange")); //배열에서 존재하지 않는다면 -1이 출력!
console.log(fruits.indexOf("orange", 2));

console.log(fruits.lastIndexOf("orange"));
console.log(fruits.lastIndexOf("orange", -3)); //banana부터 역방향으로 검색!
console.log(fruits.lastIndexOf("orange", 0)); //0을 입력하면 그 역방향으로는 어떠한 orange도 없으므로 -1 출력!

console.log(fruits.includes("banana"));
console.log(fruits.includes("Banana"));
console.log(fruits.includes(0));
