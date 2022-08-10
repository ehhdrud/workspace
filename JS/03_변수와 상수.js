let A = 123;
console.log(A);
A = 456; //접근(재할당)은 괜찮은데,
console.log(A);
//let A = 789; //재선언 불가!
let X; //변수는 초기화 없이 선언 가능

const B = 123;
console.log(B);
// A = 456; // 상수는 접근 불가
// const Y;// 상수는 초기화 없이 선언 불가!

//선언 후 할당
let hi;
hi = "hello";

//선언과 동시에 초기화
let halo = "hello!!";

//한줄에 여러 변수 선언하고 초기화
let name = "SDK",
  age = 28,
  msg = "hello!!!!";

//상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "1995. 12. 29";

console.log(age);
console.log(BIRTHDAY);
