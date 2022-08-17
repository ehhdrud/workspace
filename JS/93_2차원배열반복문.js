let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log([i], [j]);
  }
}
/*
[ 0 ] [ 0 ]
[ 0 ] [ 1 ]
[ 0 ] [ 2 ]
[ 1 ] [ 0 ]
[ 1 ] [ 1 ]
[ 1 ] [ 2 ]
[ 2 ] [ 0 ]
[ 2 ] [ 1 ]
[ 2 ] [ 2 ]
*/
let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
/*
fruit: strawberry, amount: 50
fruit: banana, amount: 100
fruit: ice, amount: 150
*/
