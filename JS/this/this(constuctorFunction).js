function Workout(name) {
  this.name = name;
}

const squat = new Workout("Squat");
console.log(squat); // Workout { name: 'Squat' } // 즉 instance를 가르킴 !
