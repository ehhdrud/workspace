let user = {
  name: "SDK",
  age: 28,
};

let admin = Object.assign({}, user); //Object.assign함수를 이용해 할당

admin.name = "Seo";
console.log(admin.name); //output: Seo
console.log(user.name); //output: SDK
