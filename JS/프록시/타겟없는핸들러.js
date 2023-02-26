let target1 = {};
let proxy1 = new Proxy(target1, {}); // 빈 핸들러 전달

target1.test = 5; // 프록시 객체에 값을 설정
console.log(proxy1.test); // 5
console.log(target1.test); // 5

let target2 = {};
let proxy2 = new Proxy(target2, {}); // 빈 핸들러 전달

target2.test = 5; // 프록시 객체에 값을 설정
console.log(proxy2.test); // 5
console.log(target2.test); // 5
