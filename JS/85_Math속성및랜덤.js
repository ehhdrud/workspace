//property
console.log(Math.E); //2.718281828459045 //오일러상수
console.log(Math.PI); //3.141592653589793 //파이값

//random
console.log(Math.random()); //0.3658909807700941
console.log(Math.random() * 10); //6.340983123199808
console.log(Number.parseInt(Math.random() * 10)); //2
console.log(Number.parseInt(Math.random() * 100)); //36

for (let i = 0; i < 10; i++) {
  console.log(Number.parseInt(Math.random() * 10));
} //0 2 4 7 0 5 8 1 4 2
