let users = [
  { name: "kyeong", age: 23, job: false },
  { name: "dong", age: 26, job: false },
  { name: "seo", age: 29, job: true },
];

let find_job = users.find(function (user) {
  return user.job == false;
});
console.log(find_job); //{ name: 'kyeong', age: 23, job: false }

let find_age = users.find(function (user) {
  return user.age > 25;
});
console.log(find_age); //{ name: 'dong', age: 26, job: false }

//find는 하나의 값만 반환!
