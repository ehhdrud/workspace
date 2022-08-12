let user = {
  name: "SDK",
  age: 28,
};

console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user);
console.log(user.name);
console.log(user.age);

user.age = 38; //재할당 가능!
console.log(user.age);
