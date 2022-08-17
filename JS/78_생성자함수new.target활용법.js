function User(name) {
  //if문을 통해 new 안 붙여도 정상 동작하도록 활용
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let result_1 = User("john");
console.log(result_1); //User { name: 'john' } //생성자 함수 new가 없어도 제대로 출력됨

let result_2 = new User("john");
console.log(result_2); //User { name: 'john' }
