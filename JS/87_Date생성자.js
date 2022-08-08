// default
let date_now = new Date();
let date_now_str = Date();

console.log(date_now);
console.log(date_now_str);
console.log(typeof date_now); //output: object
console.log(typeof date_now_str); //output: string

// ms
let date_ms_1 = new Date(0);
console.log(date_ms_1);
let date_ms_2 = new Date(1000 * 3600 * 24); //1일 추가 -> '()'의 값이 추가됨
console.log(date_ms_2);

let date_string = new Date("2022-08-08"); //"YYYY-MM-DD" 양식 지켜야 출력됨
console.log(date_string);

let date_params_1 = new Date(2021, 0, 1); //주의! -> month:1월(0)~12월(11) //아직 UTC보정 안돼서 이상한 값 나옴
console.log(date_params_1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1)); //UTC 메서드를 통해 보정
console.log(date_params_2);
