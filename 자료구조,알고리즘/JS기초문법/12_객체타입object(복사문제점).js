let user = {
  name: "SDK",
  age: 28,
};

let admin = user;
console.log(admin);

admin.name = "Seo";
console.log(admin.name);
console.log(user.name);
