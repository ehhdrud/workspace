let user = {
  name: "SDK",
  age: 28,
  sizes: {
    height: 183,
    weight: 83,
  },
};

let admin = JSON.parse(JSON.stringify(user));

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height);
console.log(admin.sizes.weight);
console.log(user.sizes.height);
console.log(user.sizes.weight);
