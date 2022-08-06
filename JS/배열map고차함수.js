let nums = [1, 2, 3, 4, 5];

//use for loop
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2); //Array.push: 배열추가
}
console.log(use_for_loop);

//use map
let use_map = nums.map(function (item) {
  return item * 2;
});
console.log(use_map);
