// throttle 함수 정의
function throttle(callback, delay) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    }
  };
}

// 스크롤 이벤트에 throttle 적용
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("scroll");
  }, 1000)
);
