let targetObj = {};
let proxyObj = new Proxy(targetObj, {}); // 빈 핸들러 전달

proxyObj.name = "dongkyeong"; // 프록시 객체에 값을 설정
console.log(targetObj.name); // dongkyeong
