console.log(Number.isNaN(123)); //false
console.log(!Number.isNaN(123 / "hello")); //false
console.log(Number.isFinite(123)); //true
console.log(Number.isFinite("hello")); //false //문자열은 Finite하지 않다고 봄

console.log(Number.parseInt("123px")); //123 //문자열이 섞여도 정수만 뽑아냄
console.log(Number.parseFloat("1.25em")); //1.25
console.log(Number.parseInt("1.25em")); //1
console.log(Number.parseInt("t125")); //NaN //앞에 섞이면 못 뽑아냄
console.log(Number.parseInt("0f", 16)); //15
