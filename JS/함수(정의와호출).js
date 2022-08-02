function print_add(x, y = 10) {
  //default value도 설정해줬음
  console.log(x + y);
}

print_add(10, 20, 30); //30은 알아서 무시하고 계산함!
print_add(10); //y에는 알아서 기본값인 10을 넣어서 계산함!

function print_min() {
  console.log(arguments[0] - arguments[1]);
}

print_min(10, 20, 30);
