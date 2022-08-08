let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let entity of recipe_juice) {
  console.log(entity);
}
for (let item of recipe_juice.keys()) {
  console.log(item);
}
for (let amount of recipe_juice.values()) {
  console.log(amount);
}

console.log(recipe_juice);
console.log(recipe_juice.entries);
