//Call by value
let a = 1;
let add = function (b) {
  b = b + 1;
};
add(a);
console.log(a);

//Call by reference
var a_ = { v: 1 };
var add_ = function (b_) {
  b_.v = b_.v + 1;
};
add_(a_);
console.log(a_);
