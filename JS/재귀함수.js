function recursive(num) {
  if (num == 0) return;
  console.log(num);
  recursive(num - 1);
  //console.log(num); //여기에 쓰면 321이 아니라 123으로 출력됨... 아직은 이해 못하겠음... 아예 출력이 안되야되는거 아닌가?...
}

recursive(3);

function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}
//3+(2+(1+0))
console.log(recursive(3));
