let x = 1;
let y = 2;

console.log(x);
console.log(y);

{
  let x = 3;
  let y = 4; //동일한 변수를 선언해도 에러가 뜨지않음!
  let z = 5;

  console.log(x);
  console.log(y);
}

console.log(x);
console.log(y);
//console.log(z); //ReferenceError: z is not defined
