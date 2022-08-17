let nums = [1, 2, 3, 4, 5];

//use for loop
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop); //[ 2, 4, 6, 8, 10 ]

//use map
let use_map = nums.map(function (item) {
  return item * 2;
});
console.log(use_map); //[ 2, 4, 6, 8, 10 ]
