let nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums.reduce(function (accumulator, item, index, array) {
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
}, 0); //initial이 없다면 index 1부터 시작! -> value는 2부터 시작하게 됨

console.log(call_count);
console.log(sum);
