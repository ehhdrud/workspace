//break
let text = "";

for (i = 0; i < 10; i++) {
  if (i == 3) break; //3일때 for문에서 빠져나옴!
  text += i;
}
console.log(text);

//continue
text = "";

for (i = 0; i < 10; i++) {
  if (i == 3) continue; //3일때 조건문 의 뒤 코드를 수행하지 않고 for문으로 돌아감!
  text += i;
}
console.log(text);

//Label사용하여 다중반복문 제어(가독성이 떨어져서 잘 안씀..)
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j); //백틱 말고도 덧셈연산자를 이용해 넘버와 스트링 조합을 할 수 있음!
  }
}

for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break; //j가 0일 때만 출력
  }
}

end: for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break end; //다중 반복문 전체 종료
  }
}
