let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(3)); //소수점 3번째 까지만 보여줌! 나머지는 반올림 처리
console.log(num_3);
console.log(num_1 / "hello"); //숫자가 아니므로 'Not A Number'(NaN)
