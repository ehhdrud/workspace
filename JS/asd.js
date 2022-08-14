for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break; //0*0=0, 1*0=0, 2*0=0
  }
}

//label을 통해 다중 반복문 전체 종료
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break end; //0*0=0
  }
}
