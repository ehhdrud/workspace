function Workout(name) {
  this.name = name;
}

const squat = new Workout("Squat");
console.log(squat.name); // Squat // 즉 this는 instance인 squat를 가르킴!
