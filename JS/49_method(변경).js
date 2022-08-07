function hello_func() {
  console.log("hello");
}

function hi_func() {
  console.log("hi");
}

let obj = {
  name: "SDK",
  age: 28,
  func: hello_func,
};

hello_func();
obj.func();
console.log(hello_func == obj.func);

obj.func = hi_func;
hi_func();
obj.func();
console.log(hello_func == obj.func);
console.log(hi_func == obj.func);
