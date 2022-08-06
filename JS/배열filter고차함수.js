let users = [
  { name: "kyeong", age: 23, job: false },
  { name: "dong", age: 26, job: false },
  { name: "seo", age: 29, job: true },
];

let find_job = users.filter(function (user) {
  return user.job == false;
});
console.log(find_job);

let find_age = users.filter(function (user) {
  return user.age > 25;
});
console.log(find_age);

//filter는 모든 값 반환!
