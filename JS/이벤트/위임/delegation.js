const myList = document.querySelector("#myList");

myList.addEventListener("click", (event) => {
  // 클릭된 요소가 li 태그인 경우에만 처리 !
  if (event.target.tagName === "LI") {
    console.log("You clicked on:", event.target.textContent);
  }
});
