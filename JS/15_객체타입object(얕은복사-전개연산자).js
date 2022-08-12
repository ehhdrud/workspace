let user = {
  name: "SDK",
  age: 28,
};

let admin = { ...user }; //전개연산자를 이용해 새로운 공간을 만들어서 그 공간으로 복사

admin.name = "Seo";
console.log(admin.name); //output: Seo
console.log(user.name); //output: SDK
