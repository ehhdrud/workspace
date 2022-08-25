let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let entity of recipe_juice) {
  console.log(entity);
} //[ 'strawberry', 50 ] [ 'banana', 100 ] [ 'ice', 150 ]
for (let item of recipe_juice.keys()) {
  console.log(item);
} //strawberry banana ice
for (let amount of recipe_juice.values()) {
  console.log(amount);
} //50 100 150

console.log(recipe_juice); //Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
console.log(recipe_juice.entries); //[Function: entries]
