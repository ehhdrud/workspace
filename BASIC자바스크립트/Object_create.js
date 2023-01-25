let legDay = Object.create(Object.prototype, {
  workoutName: {
    value: "Squat",
    writable: true, //덮어쓸 수 있는지?
    enumerable: true, //열거할 수 있는지?
    configurable: true, //객체 서술자를 수정할 수 있는지?
  },
  sets: {
    value: 3,
  },
  reps: {
    value: 10,
  },
  sayWorkout: {
    value: function () {
      console.log(
        `오늘의 운동은 ${this.workoutName}이고 ${this.sets}세트, 각 ${this.reps}회가 목표입니다!`
      );
    },
  },
});

legDay.sayWorkout(); // 오늘의 운동은 Squat이고 3세트, 각 10회가 목표입니다!
