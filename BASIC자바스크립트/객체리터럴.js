let legDay = {
  workoutName: "Squat",
  sets: 3,
  reps: 10,
  sayWorkout: function () {
    console.log(
      `오늘의 운동은 ${this.workoutName}이고 ${this.sets}세트, 각 ${this.reps}회가 목표입니다!`
    );
  },
};
