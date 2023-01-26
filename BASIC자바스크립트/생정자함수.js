function Workout(workoutName, sets, reps) {
  this.workoutName = workoutName;
  this.sets = sets;
  this.reps = reps;
  this.getInfo = function () {
    console.log(
      `오늘의 운동은 ${this.workoutName}이고 ${this.sets}세트, 각 ${this.reps}회가 목표입니다!`
    );
  };
}

let squat = new Workout("Squat", 3, 5);
let legPress = new Workout("Leg Press", 5, 10);

squat.getInfo(); // 오늘의 운동은 Squat이고 3세트, 각 5회가 목표입니다!
legPress.getInfo(); // 오늘의 운동은 Leg Press이고 5세트, 각 10회가 목표입니다!
