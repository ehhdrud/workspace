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
} //재귀함수를 이용한 깊은 복사

admin = copy(user);

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height); //output:182
console.log(admin.sizes.weight); //output:84
console.log(user.sizes.height); //output:183
console.log(user.sizes.weight); //output:83
