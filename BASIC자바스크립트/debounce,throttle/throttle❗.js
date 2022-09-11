let i = 0;

window.addEventListener(
  "scroll",
  throttle(() => {
    i = i + 1;
    console.log(i); //얼마나 호출되는지 확인하기 위함
  }, 500)
);

//throttle 함수를 정의
function throttle(callback, wait) {
  let timeout = null;

  //closure
  //함수가 호출 시 매번 반환
  return function (...args) {
    const context = this;

    if (!timeout) {
      timeout = setTimeout(() => {
        callback.apply(this, args);
        timeout = null;
      });
    }
  };
}
