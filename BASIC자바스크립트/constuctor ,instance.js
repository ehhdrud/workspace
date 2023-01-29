const obj = {};
const arr = [];
const func = function () {};
const str = "str";
const num = 3;

//obj변수에 constuctor 없으니깐 ~~~.prototype에서 찾아서 출력한다.
console.log(obj.constructor.name); //Object
console.log(arr.constructor.name); //Array
console.log(func.constructor.name); //Function
console.log(str.constructor.name); //String
console.log(num.constructor.name); //Number

console.log(obj instanceof Object); //true
console.log(arr instanceof Array); //true
console.log(func instanceof Function); //true
//래퍼(Wrapper)로 만들지 않아서 false! //new String("str"), new Number(3); 방식으로 만들면 true가 출력된다.
console.log(str instanceof String); //false
console.log(num instanceof Number); //false
