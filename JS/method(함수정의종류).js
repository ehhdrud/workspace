//함수 선언식
function add_1(x, y) {
  return x + y;
}

//함수 표현식
const add_2 = function (x, y) {
  return x + y;
};

//화살표 함수
const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_4(1, 3));

console.log(add_2 == add_1); //output: false (동작은 같지만 주소값이 다름)
console.log(add_4 == add_1); //output: true (주소값도 복사되어 같으므로)

//Object.getOwnPropertyDescriptors:객체에 대한 상세 내용을 볼 수 있음
console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4)); //Value:'add_1' -> add_1과 가르키는 대상이 같다!
