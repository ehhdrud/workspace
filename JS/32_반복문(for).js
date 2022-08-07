for (i = 0; i < 3; i++) {
  console.log(i);
}

for (i = 10; i < 3; i++) {
  console.log(i);
}

let num = 0;

//선언문과 증감문을 빼버리고 공백 사용
for (; num < 2; ) {
  console.log(num);
  num++;
}

for (x = 0; x < 3; x++) {
  for (y = 0; y < 3; y++) {
    for (z = 0; z < 3; z++) {
      console.log(`${x} + ${y} + ${z} = ${x + y + z}`);
    }
  }
}
