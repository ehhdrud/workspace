let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array);
console.log(array[0]);
console.log(array[2][1]);

let array_2 = array.pop();
console.log(array);
console.log(array.length);
console.log(array_2);

let array_3 = array.push([401, 402, 403]);
console.log(array.length);
console.log(array_3);
console.log(array);
