let fruits = ["apple", "orange", "melon"];

//index 접근
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//element 접근
for (let fruit of fruits) {
  console.log(fruit);
}

//key 접근
for (let key in fruits) {
  console.log(fruits[key]);
}
