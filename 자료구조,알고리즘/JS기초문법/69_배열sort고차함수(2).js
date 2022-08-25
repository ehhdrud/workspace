let fruits = ["apple", "Orange", "orange", "melon"];

//오름차순 함수, String method를 통해 모두 대문자로 치환하고 오름차순 정렬
let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

//내림차순 함수, String method를 통해 모두 대문자로 치환하고 내림차순 정렬
let decending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (y > x) return 1;
  else if (x > y) return -1;
  else return 0;
};

console.log(fruits.sort(ascending_order)); //[ 'apple', 'melon', 'Orange', 'orange' ]
console.log(fruits.sort(decending_order)); //[ 'Orange', 'orange', 'melon', 'apple' ]
