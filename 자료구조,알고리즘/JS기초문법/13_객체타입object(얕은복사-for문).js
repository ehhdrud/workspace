let user = {
  name: "SDK",
  age: 28,
};

let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

admin.name = "Seo";
console.log(admin.name);
console.log(user.name);
