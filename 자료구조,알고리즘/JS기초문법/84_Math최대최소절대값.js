//MAX, MIN
console.log(Math.max(-1, 1)); //1
console.log(Math.min(-1, 1)); //-1

console.log(Math.max(1, -1, 5, 23, 17, -4)); //23
console.log(Math.min(1, -1, 5, 23, 17, -4)); //-4

let nums = [1, -1, 5, 23, 17, -4];
console.log(Math.max(nums)); //NaN //values만 인자로 받기 때문에 배열을 받을 수 없음

//use apply function
console.log(`Max: ${Math.max.apply(null, nums)}`); //Max: 23
console.log(`Min: ${Math.min.apply(null, nums)}`); //Min: -4

//use spread(스프레드 문법을 통해 배열을 산개시켜서 인자로 넣어줌)
console.log(`Max: ${Math.max(...nums)}`); //Max: 23
console.log(`Min: ${Math.min(...nums)}`); //Min: -4

//ABS
console.log(Math.abs(1)); //1
console.log(Math.abs(-1)); //1
console.log(Math.abs(-Infinity)); //Infinity
