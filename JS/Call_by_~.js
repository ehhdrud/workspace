//Call by value
let a = 1;
let add = function (b) {
  b = b + 1;
}; //callee
add(a); //caller
console.log(a); //output:1 -> b가 2가 되어도 a는 변하지 않음!

//Call by reference
var a_ = { v: 1 };
var add_ = function (b_) {
  b_.v = b_.v + 1;
}; //callee
add_(a_); //caller
console.log(a_); //output:2 -> b_가 2가 되면 a_도 같이 변함!
