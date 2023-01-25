legDay.sayWorkout(); // 오늘의 운동은 Squat이고 3세트, 각 10회가 목표입니다!

let legDay = new Object();

legDay.workoutName = "Squat";
legDay.sets = 3;
legDay.reps = 10;
legDay.sayWorkout = console.log(
  `오늘의 운동은 ${this.workoutName}이고 ${this.sets}세트, 각 ${this.reps}회가 목표입니다!`
);
