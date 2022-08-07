console.log(name_1);
var name_1 = "SDK";
console.log(name_1);

//1,2,3번 라인 내부 동작원리
var name_2;
console.log(name_2);
name_2 = "SDK";
console.log(name_2);

// ReferenceError: Cannot access 'name_3' before initialization //let을 쓰면 hoisting 안되므로 에러
/*console.log(name_3);
let name_3 = "SDK";*/