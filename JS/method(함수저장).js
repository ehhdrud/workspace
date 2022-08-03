let list = [
  "SDK",
  28,
  function hello_func() {
    console.log("hello");
  },
]; //배열의 요소(element)에 저장
let obj = {
  name: "SDK",
  age: 27,
  hello_func() {
    console.log("hello");
  },
};
function hello_func() {
  console.log("hello");
}

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(list));
