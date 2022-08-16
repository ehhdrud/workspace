let list = [
  "SDK",
  28,
  function hello_func() {
    console.log("hello");
  }, //배열의 요소(element)에 저장된 함수 -> Method
];

let obj = {
  name: "SDK",
  age: 27,
  hello_func() {
    console.log("hello");
  }, //객체의 속성(property)에 저장된 함수 -> Method
};

function hello_func() {
  console.log("hello");
}

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func); //function
console.log(typeof obj.hello_func); //function
console.log(typeof list[2]); //function

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(list));
