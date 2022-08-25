let date = new Date();
console.log(date); //2022-08-17T11:34:41.802Z

//set year
let ms_year = date.setFullYear(1995, 11, 29);
console.log(date); //1995-12-29T11:35:22.871Z
console.log(ms_year); //820236922871
console.log(new Date(ms_year)); //1995-12-29T11:35:22.871Z

//set date
date.setDate(1);
console.log(date); //1995-12-01T11:35:22.871Z
date.setDate(0); //1일보다 하루 전 날이나까 전 달의 말일로 설정됨
console.log(date); //1995-11-30T11:35:22.871Z

//set hours
date.setHours(date.getHours() + 2);
console.log(date); //1995-11-30T13:35:22.871Z
