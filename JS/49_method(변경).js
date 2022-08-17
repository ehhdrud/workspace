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

hello_func(); //hello
obj.func(); //hello
console.log(hello_func == obj.func); //true

obj.func = hi_func; //이런식으로 메소드 변경 가능!
obj.func(); //hi
console.log(hello_func == obj.func); //false //변경되어 더이상 같지 않음!
console.log(hi_func == obj.func); //true //변경되어 같음!
