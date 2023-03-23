function Workout(name) {
  this.name = name;
}

const squat = Workout("Squat");
console.log(window.name); // Squat // 즉 this는 instance인 window를 가르킴!
