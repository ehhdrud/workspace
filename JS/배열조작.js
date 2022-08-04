let fruits = ["apple", "orange", "melon"];

ret = fruits.push("watermelon");
console.log(fruits);
console.log(ret); //output:4
ret = fruits.pop();
console.log(fruits);
console.log(ret); //output: watermelon

ret = fruits.shift();
console.log(fruits);
console.log(ret);
ret = fruits.unShift("watermelon");
console.log(fruits);
console.log(ret);
