let user = {
  name: "SDK",
  age: 28,
};

console.log(user); //{ name: 'SDK', age: 28 }

user.weight = 83; //추가
console.log(user); //{ name: 'SDK', age: 28, weight: 83 }

delete user.age; //삭제
console.log(user); //{ name: 'SDK', weight: 83 }
