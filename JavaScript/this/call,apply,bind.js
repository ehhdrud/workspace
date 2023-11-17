const workout = {
    name: 'Squat',
    todayWorkout: function () {
        return `오늘의 운동: ${this.name} / `;
    },
};

function getInfo(kg, sets, reps) {
    return this.todayWorkout() + `${kg}KG ${sets}SETS ${reps}REPS`;
}

const strengthTraining = getInfo.call(workout, 140, 3, 5);
console.log(strengthTraining);
// 첫 번째 매개변수에는 "this가 가리킬 객체"
// 두 번째 매개변수부터 "함수의 매개변수"를 입력 !
// 오늘의 운동: Squat / 140KG 3SETS 5REPS

const hypertrophyTraining = getInfo.apply(workout, [100, 3, 12]);
console.log(hypertrophyTraining);
// 첫 번째 매개변수에는 "this가 가리킬 객체"
// 두 번째 매개변수에는 "함수의 매개변수를 배열로" 입력 !
// 오늘의 운동: Squat / 100KG 3SETS 12REPS

const endurance = getInfo.bind(workout);
const enduranceTraining = endurance(80, 3, 20);
console.log(enduranceTraining);
// 매개변수로 "this가 가리킬 객체"를 입력하고
// 함수의 매개변수는 리턴받은 함수를 호출할 때 입력 !
// 오늘의 운동: Squat / 80KG 3SETS 20REPS
