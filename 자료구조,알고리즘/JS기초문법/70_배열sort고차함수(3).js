let ascending_order = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x > y ? 1 : -1;
};

let decending_order = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return y > x ? 1 : -1;
};

let nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(ascending_order)); //[-1, 0, 1, 4, 10, 12, 20]
console.log(nums.sort(decending_order)); //[20, 12, 10, 4, 1, 0, -1]

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order)); //[ 'apple', 'melon', 'orange', 'Orange' ]
console.log(fruits.sort(decending_order)); //[ 'Orange', 'orange', 'melon', 'apple' ]
