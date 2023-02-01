let i = 0;

document.querySelector("input").addEventListener(
  "keyup",
  debounce(() => {
    i = i + 1;
    console.log(i); //얼마나 호출되는지 확인하기 위함
  }, 500)
);

//마지막 호출 이후 일정 밀리세컨드 이후로 지연된 호출을 하도록하는 debounce함수를 정의
function debounce(callback, wait) {
  let timeout;

  //closure
  //함수가 호출 시 매번 반환
  return function (...args) {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}
