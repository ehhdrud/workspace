let user = {
  name: "SDK",
  age: 28,
};

let admin = user;
console.log(admin);

admin.name = "Seo";
console.log(admin.name);
console.log(user.name); //왜 user.name도 바뀜? > object값을 복사할 때 대상 전체가 아닌 object 내 주소값만 복사됨... 같은 주소? 같은 공간을 가르키게 됨...
