for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 10; i < 3; i++) {
  console.log(i);
}

let num = 0;
for (; num < 2; ) {
  console.log(num);
  num++;
}

for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    for (let z = 0; z < 3; z++) {
      console.log(`${x} + ${y} + ${z} = ${x + y + z}`);
    }
  }
}
