let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

let recipe_juice_obj = Object.fromEntries(recipe_juice); //object
let recipe_juice_kv = Object.entries(recipe_juice_obj); //keys,values
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice); //Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
console.log(recipe_juice_obj); //{ strawberry: 50, banana: 100, ice: 150 }
console.log(recipe_juice_kv); //[ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]
console.log(recipe_juice_map); //Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
