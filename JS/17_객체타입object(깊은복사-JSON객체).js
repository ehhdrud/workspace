let user = {
  name: "SDK",
  age: 28,
  sizes: {
    height: 183,
    weight: 83,
  },
};

let admin = JSON.parse(JSON.stringify(user)); //stringify를 통해 user객체를 문자열로 만들고, parse를 통해 문자열을 다시 객체로 만들어서 admin에 넣는다. 이 과정에서 원본 객체와의 참조가 끊긴다!

admin.sizes.weight++;
--admin.sizes.height;

console.log(admin.sizes.height);
console.log(admin.sizes.weight);
console.log(user.sizes.height); //user의 sizes객체의 내부 value도 바뀌어버림
console.log(user.sizes.weight); //user의 sizes객체의 내부 value도 바뀌어버림
