//외부 변수 참조를 보여주는 예제
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

//상태 유지 예제
const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

function createCounter() {
  let count = 0; // 카운트 상태 유지

  return function () {
    count++; // 카운트 증가
    return count; // 현재 카운트 값 반환
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
