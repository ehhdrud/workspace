let date = new Date();
console.log(date);

//set year
let ms_year = date.setFullYear(2017, 11, 13);
console.log(date);
console.log(ms_year);
console.log(new Date(ms_year));

//set date
date.setDate(1);
console.log(date);
date.setDate(0); //1일보다 하루 전 날이나까 전 달의 말일로 설정됨
console.log(date);

//set hours
date.setHours(date.getHours() + 2);
console.log(date);
