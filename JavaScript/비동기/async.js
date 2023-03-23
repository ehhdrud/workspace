//Promise의 Fullfilled State의 처리 결과값을 반환하는 func 함수
function func() {
  return Promise.resolve(1);
}

//async를 사용한 함수
async function asyncFunc() {
  return 1;
}

console.log(func()); // Promise { 1 }
console.log(asyncFunc()); // Promise { 1 }
