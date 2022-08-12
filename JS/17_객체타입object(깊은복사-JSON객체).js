let user = {
  name: "SDK",
  age: 28,
  sizes: {
    height: 183,
    weight: 83,
  },
};

let admin = JSON.parse(JSON.stringify(user));
//stringify를 이용해 user객체를 문자열로 만들고, parse를 이용해 문자열을 다시 객체로 만들어서 admin에 넣음. 이 과정에서 원본 객체와의 참조가 끊김.

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height); //output:182
console.log(admin.sizes.weight); //output:84
console.log(user.sizes.height); //output:183
console.log(user.sizes.weight); //output:83
