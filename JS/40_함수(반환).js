function add(x, y) {
  return x + y;
  console.log("hello!"); //"hello!"는 출력이 안됨 > return 자체의 의미도 있지만 break의 기능도 함! (VScode도 흐릿하게 처리함...)
}

let result = add(10, 20);
console.log(result);

function checkAge(age) {
  if (age >= 18) return true;
  else return false;
}

console.log(checkAge(14));
console.log(checkAge(20));
