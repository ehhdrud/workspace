let A = 123;
console.log(A);

A = 456; //접근은 괜찮은데,
console.log(A);

//let A=789; //재선언 불가!

const B = 123;
console.log(B);

// A=456; // 재할당 불가(변수가 아니라 상수이므로)!

// const B; // 초기화 없이 선언 불가!

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
