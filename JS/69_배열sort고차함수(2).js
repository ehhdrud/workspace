//오름차순 함수, String method를 통해 모두 대문자로 치환하고 오름차순 정렬
let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0; // <return x>y?1:-1> //❗:이게 오름차순..?
};

//내림차순 함수, String method를 통해 모두 대문자로 치환하고 내림차순 정렬
let decending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (y > x) return 1;
  else if (x > y) return -1;
  else return 0; // <return y>x?1:-1> //❗:이게 내림차순..?
};

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order));
console.log(fruits.sort(decending_order));
