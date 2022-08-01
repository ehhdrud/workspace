let user = {
  name: "SDK",
  age: 28,
};

let admin = { ...user }; //전개연산자를 통해 새로운 공간을 만들어서 그 공간으로 복사

admin.name = "Seo";
console.log(admin.name);
console.log(user.name);
