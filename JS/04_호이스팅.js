console.log(name_1);
var name_1 = "SDK"; //선언은 전역으로 됐지만, 할당(초기화)은 2번 라인에서 됨
console.log(name_1);

//1,2,3번 라인 내부 동작원리
var name_2;
console.log(name_2);
name_2 = "SDK";
console.log(name_2);

/*console.log(name_3);
let name_3 = "SDK"; // ReferenceError: Cannot access 'name_3' before initialization //let을 쓰면 hoisting 안되므로 에러 */
