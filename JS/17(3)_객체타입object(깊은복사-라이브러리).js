import _ from "lodash";
let user = {
  name: "SDK",
  age: 28,
  sizes: {
    height: 183,
    weight: 83,
  },
};

const admin = _.cloneDeep(user); //cloneDeep함수를 이용한 깊은 복사

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height); //output:182
console.log(admin.sizes.weight); //output:84
console.log(user.sizes.height); //output:183
console.log(user.sizes.weight); //output:83
