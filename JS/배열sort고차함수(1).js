let nums = [1, -1, 4, 00, 10, 20, 12];

console.log(nums.sort());
console.log(nums.reverse()); //4가 10보다 높은 수로 취급되는 문제 발생

//오름차순 함수
let ascending_order = function (x, y) {
  return x - y; //❗:x-y>0이 참이면 두 값의 위치가 바뀜 (10,4) -> 10-4=6 -> (4,10)... 어떻게 저 수식만으로 이게 돼..?
};

//내림차순 함수
let decending_order = function (x, y) {
  return y - x;
};

console.log(nums.sort(ascending_order));
console.log(nums.sort(decending_order)); //콜백함수를 이용한 고차함수 사용으로 문제 해결!
