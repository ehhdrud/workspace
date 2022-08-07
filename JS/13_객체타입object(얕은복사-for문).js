let user = {
  name: "SDK",
  age: 28,
};

let admin = {}; //admin변수에 빈 {}를 만들어줌

for (let key in user) {
  admin[key] = user[key];
} //for문을 통해 일일이 복사해줌

admin.name = "Seo";
console.log(admin.name);
console.log(user.name);
