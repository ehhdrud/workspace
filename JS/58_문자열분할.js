let fruits = "apple banana melon";

result = fruits.split(" "); //분할할 곳은 띄어쓰기!
console.log(result);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let text = "hello";

result = text.split("");
console.log(result);
console.log(result.length);
console.log(result[0]);

result = text.split("", 3);
console.log(result);
console.log(result.length);
