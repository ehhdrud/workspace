let user = {
  name: "SDK",
  age: 28,
};

let admin = Object.assign({}, user); //Object.assign함수를 통해 할당

admin.name = "Seo";
console.log(admin.name);
console.log(user.name);
