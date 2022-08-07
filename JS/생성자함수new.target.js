function User(name) {
  console.log(new.target); //new.target 속성을 사용하면 new를 안 썼을 때 undefined가 출력되며 확인 가능
  this.name = name;
}

//not use new keyword -> function
let result_1 = User("john");
console.log(result_1);

//use new keyword -> constructor function
let result_2 = new User("john");
console.log(result_2);
