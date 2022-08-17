let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array); //[ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); //[ 101, 102, 103 ]
console.log(array[2][1]); //302

let array_2 = array.pop();
console.log(array); //[ [ 101, 102, 103 ], [ 201, 202, 203 ] ]
console.log(array.length); //2
console.log(array_2); //[ 301, 302, 303 ]

let array_3 = array.push([401, 402, 403]);
console.log(array.length); //3
console.log(array_3); //3
console.log(array); //[ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
