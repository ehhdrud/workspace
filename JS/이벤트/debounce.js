// debounce 함수 정의
function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
}

// 검색창에 debounce 적용
const input = document.querySelector("#search-input");
input.addEventListener(
  "input",
  debounce(() => {
    console.log("search");
  }, 500)
);
