var globalVar = "var in global";
let globalLet = "let in global";
const globalConst = "const in global";

console.log(globalVar); // var in global
console.log(globalLet); // let in global
console.log(globalConst); //const in global

function func() {
  var funcVar = "var in function";
  let funcLet = "let in function";
  const funcConst = "const in function";

  console.log(funcVar); // var in function
  console.log(funcLet); // let in function
  console.log(funcConst); // const in function
}
func();

console.log(funcVar); // error
console.log(funcLet); // error
console.log(funcConst); // error

{
  var blockVar = "var in block";
  let blockLet = "let in block";
  const blockConst = "const in block";

  console.log(blockVar); // var in block // Global Scope로부터 가져옴
  console.log(blockLet); // let in block
  console.log(blockConst); // const in block
}

console.log(blockVar); // var in block
console.log(blockLet); // error
console.log(blockConst); // error
