/* 1. MAX, MIN */
console.log(Math.max(-1, 1));
console.log(Math.min(-1, 1));

console.log(Math.max(1, -1, 5, 23, 17, -4));
console.log(Math.min(1, -1, 5, 23, 17, -4));

let nums = [1, -1, 5, 23, 17, -4];
console.log(Math.max(nums)); //output: NaN -> values만 인자로 받기 때문에 배열을 받을 수 없음
//use apply function
console.log(`Max: ${Math.max.apply(null, nums)}`);
console.log(`Min: ${Math.min.apply(null, nums)}`);
//use spread(스프레드 문법을 통해 배열을 산개시켜서 인자로 넣어줌!)
console.log(`Max: ${Math.max(...nums)}`);
console.log(`Min: ${Math.min(...nums)}`);

/* 1. ABS */
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity));
