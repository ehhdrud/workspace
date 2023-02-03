const Workout = function (name, sets, reps) {
  this.name = name;
  this.sets = sets;
  this.reps = reps;
  this.getInfo = function () {
    console.log(this); // Workout
    console.log(
      `오늘의 운동: ${this.name} / ${this.sets}SETS ${this.reps}REPS`
    ); // 오늘의 운동: Squat / 3SETS 10REPS

    const innerFunc = function () {
      console.log(this); // Window
      console.log(
        `오늘의 운동: ${this.name} / ${this.sets}SETS ${this.reps}REPS`
      ); // 오늘의 운동: undefined / undefinedSETS undefinedREPS
    };
    innerFunc();
  };
};

const squat = new Workout("Squat", 3, 10);
squat.getInfo();
