let A = 1;
let B = 2;

{
  let C = 3;
  let D = 4;
  console.log(C);
  {
    let C = 5;
    let D = 6;
    console.log(C);
  }
}
