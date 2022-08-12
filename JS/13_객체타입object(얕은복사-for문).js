let user = {
  name: "SDK",
  age: 28,
};

let admin = {}; //admin변수에 빈 {}를 만들어준다

for (let key in user) {
  admin[key] = user[key];
} //for문을 이용해 하나하나 복사

admin.name = "Seo";
console.log(admin.name); //output: Seo
console.log(user.name); //output: SDK
