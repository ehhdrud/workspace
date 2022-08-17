let date = new Date(Date.UTC(1995, 11, 29)); //UTC보정값 //그냥 new Date();로 출력하면 조금 다르게 나옴

console.log(date); //1995-12-29T00:00:00.000Z

//year, month, day:0(sun)~6(sat)
console.log(date.getFullYear()); //1995
console.log(date.getMonth()); //11
console.log(date.getDate()); //29
console.log(date.getDay()); //5

//hours
console.log(date.getHours()); //9
console.log(date.getUTCHours()); //0 //UTC보정값
console.log(date.getMinutes()); //0
console.log(date.getSeconds()); //0
console.log(date.getMilliseconds()); //0

//getTime:(now-date(0)) milliseconds
//getTimezonOffset:(UTC+0 - currentZone) minutes
console.log(date.getTime()); //820195200000 //계산을 위해 ms단위로 시간값을 받음
console.log(date.getTimezoneOffset()); //-540 //UTC와 얼마나 차이나는지 보여줌
