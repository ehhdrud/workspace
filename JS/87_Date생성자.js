//default
let date_now = new Date();
let date_now_str = Date();

console.log(date_now); //2022-08-17T11:28:20.384Z
console.log(date_now_str); //Wed Aug 17 2022 20:28:20 GMT+0900 (대한민국 표준시)
console.log(typeof date_now); //object
console.log(typeof date_now_str); //string

//ms
let date_ms_1 = new Date(0);
console.log(date_ms_1); //1970-01-01T00:00:00.000Z
let date_ms_2 = new Date(1000 * 3600 * 24); //1일 추가 -> '()'의 값이 추가됨
console.log(date_ms_2); //1970-01-02T00:00:00.000Z

let date_string = new Date("1995-12-29"); //"YYYY-MM-DD" 양식 지켜야 출력됨
console.log(date_string); //1995-12-29T00:00:00.000Z

let date_params_1 = new Date(2021, 0, 1); //month:1월(0)~12월(11)
console.log(date_params_1); //2020-12-31T15:00:00.000Z //아직 UTC보정 안돼서 이상한 값 나옴
let date_params_2 = new Date(Date.UTC(2021, 0, 1)); //UTC 메서드를 통해 보정
console.log(date_params_2); //2021-01-01T00:00:00.000Z
