function dateSub(old_date, new_date) {
  return new_date - old_date;
} //dateSub 함수 정의

function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
} //(ms로 변환시켜서 계산하는)getTimeSub 함수 정의

function benchmark(callback_func) {
  //성능측정 함수 정의
  let date_1 = new Date("2020-01-01"); //향후 old_date에 들어갈 값
  let date_2 = new Date(); //향후 new_date에 들어갈 값

  let start = Date.now(); //알고리즘 수행 전에 현재 시간을 저장
  for (let i = 0; i < 100000; i++) {
    //for문을 통해 100000번 정도 수행할거고
    callback_func(date_1, date_2); //콜백함수로 위 두 함수를 받아서 date_1과 date_2에 대한 연산을 할 것임
  }
  return Date.now() - start; //다 수행되고 나면, 현재 시간에서 아까 저장했던 시간차를 리턴할 것임(성능평가!!)
}

console.log("dateSub: " + benchmark(dateSub) + "ms"); //여기서 콜백함수로 dateSub 함수가 실행되고 연산에 걸린 시간은 Date.now() - start
console.log("getTimeSub: " + benchmark(getTimeSub) + "ms"); //여기서 콜백함수로 getTimeSub 함수가 실행되고 연산에 걸린 시간은 Date.now() - start
