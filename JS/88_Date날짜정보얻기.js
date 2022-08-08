//let date = new Date(); //출력 -> output:2022-08-08(하지만 시간은 다름)
let date = new Date(Date.UTC(2022, 08, 08));

console.log(date);

//year, month, day:0(sun)~6(sat)
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());

//hours
console.log(date.getHours());
console.log(date.getUTCHours());

//getTime:(now-date(0)) milliseconds
//getTimezonOffset:(UTC+0 - currentZone) minutes
console.log(date.getTime()); //계산을 위해 ms단위로 시간값을 받음
console.log(date.getTimezoneOffset()); //UTC와 얼마나 차이나는지 보여줌
