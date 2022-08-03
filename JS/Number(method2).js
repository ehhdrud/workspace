console.log(Number.isNaN(123));
console.log(!Number.isNaN(123 / "hello"));
console.log(Number.isFinite(123));
console.log(Number.isFinite("hello")); //output:false!!!

console.log(Number.parseInt("123px")); //문자열이 섞여도 정수만 뽑아냄
console.log(Number.parseFloat("1.25em"));
console.log(Number.parseInt("1.25em"));
console.log(Number.parseInt("t125")); //근데 앞에 섞이면 못 뽑아냄
console.log(Number.parseInt("0f", 16)); //❗
