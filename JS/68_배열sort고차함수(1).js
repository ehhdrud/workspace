let nums = [1, -1, 4, 0, 10, 20, 12];

console.log(nums.sort()); //[-1, 0, 1, 10, 12, 20, 4] //4가 10보다 높은 수로 취급되는 문제 발생
console.log(nums.reverse()); // [4, 20, 12, 10, 1, 0, -1] //4가 10보다 높은 수로 취급되는 문제 발생

//오름차순 함수
let ascending_order = function (x, y) {
  return x - y; //x-y>0이 참이면 두 값의 위치가 바뀜 //(ex)(10,4) -> 10-4=6 > 0 -> true -> (4,10)
};

//내림차순 함수
let decending_order = function (x, y) {
  return y - x; //y-x>0이 참이면 두 값의 위치가 바뀜 //(ex) (4,10) -> 10-4=6 > 0 -> true -> (10,4)
};

console.log(nums.sort(ascending_order)); //[-1, 0, 1, 4, 10, 12, 20]
console.log(nums.sort(decending_order)); //[20, 12, 10, 4, 1, 0, -1]

