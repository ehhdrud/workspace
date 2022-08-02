//숫자에 따라 월요일(1)~일요일(7)까지 출력하는 코드를 작성하시오
const day = 3;
let weekend = "";

switch (day) {
  case 1:
    weekend = "Mon";
    break;
  case 2:
    weekend = "Tue";
    break;
  case 3:
    weekend = "Wed";
    break;
  case 4:
    weekend = "Thu";
    break;
  case 5:
    weekend = "Fri";
    break;
  case 6:
    weekend = "Sat";
    break;
  case 7:
    weekend = "Sun";
    break;
  default:
    weekend = "Error";
    break;
}
console.log(weekend);
