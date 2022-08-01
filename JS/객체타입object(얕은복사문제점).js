let user = {
  name: "SDK",
  age: 28,
  sizes: {
    height: 183,
    weight: 83,
  },
};

let admin = Object.assign({}, user); //Object.assign함수를 통해 할당

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height);
console.log(admin.sizes.weight);
console.log(user.sizes.height); //user의 sizes객체의 내부 value도 바뀌어버림
console.log(user.sizes.weight); //user의 sizes객체의 내부 value도 바뀌어버림
