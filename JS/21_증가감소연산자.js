let num, result;

num = 10;
result = num++; //바로 반영 안됨
console.log(result);
console.log(num);

num = 10;
result = ++num; //바로 반영
console.log(result);
console.log(num);

num = 10;
result = num--; //바로 반영 안됨
console.log(result);
console.log(num);

num = 10;
result = --num; //바로 반영
console.log(result);
console.log(num);
