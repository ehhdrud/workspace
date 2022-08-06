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
console.log(nums.sort(ascending_order));
console.log(nums.sort(decending_order));

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order));
console.log(fruits.sort(decending_order));
