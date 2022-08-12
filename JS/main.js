let user = {
  name: "SDK",
  age: 28,
  sizes: {
    height: 183,
    weight: 83,
  },
};

function copy(user) {
  let result = {};

  for (let key in user) {
    if (typeof user[key] === "object") {
      result[key] = copy(user[key]);
    } else {
      result[key] = user[key];
    }
  }
  return result;
}

admin = copy(user);

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height);
console.log(admin.sizes.weight);
console.log(user.sizes.height);
console.log(user.sizes.weight);
