let user = {
  name: "SDK",
  age: 28,
};

let admin = Object.assign({}, user);

admin.name = "Seo";
console.log(admin.name);
console.log(user.name);
