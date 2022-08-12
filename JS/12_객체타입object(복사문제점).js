let user = {
  name: "SDK",
  age: 28,
};

let admin = user;
console.log(admin);

admin.name = "Seo";
console.log(admin.name);
console.log(user.name); //object값을 복사할 때 대상 전체가 아닌 object 내 주소값이 복사되어 user의 내부 value도 바뀜
