let fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1)); //[ 'orange', 'melon' ] -> index=1부터 데이터를 리턴
console.log(fruits); //[ 'apple', 'orange', 'melon' ] -> 원본데이터에는 영향을 안줌!

console.log(fruits.slice(1, 2)); //[ 'orange' ] -> index=1부터2까지(즉1만!) 데이터를 리턴
console.log(fruits.slice(-2)); //[ 'orange', 'melon' ] -> -2는 orange 이므로 그 뒤로 리턴

console.log(fruits.concat("strawberry"));
console.log(fruits.concat(["cherry", "banana"]));
console.log(fruits.concat(["cherry", "banana"], "mango"));
