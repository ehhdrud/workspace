const names = ["dolphin", "elephant", "elephant"];

const result = names.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }

  return acc;
}, {});

console.log(result);

let min = Math.min(result[0], result[1]);
console.log(min);
