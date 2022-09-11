let i = 0;

window.addEventListener(
  "scroll",
  throttle(() => {
    i = i + 1;
    console.log(i); //얼마나 호출되는지 확인하기 위함
  }, 500)
);

//마지막 호출 이후 일정 밀리세컨드 이후로 지연된 호출을 하도록하는 debounce함수를 정의
function throttle(callback, wait) {
  let timeout = null;

  //closure
  //함수가 호출 시 매번 반환
  return function (...args) {
    const context = this; //화살표 함수를 사용해서 this를 위에서 받아줌

    if (!timeout) {
      timeout = setTimeout(() => {
        callback.apply(this, args);
        timeout = null;
      });
    }
  };
}
