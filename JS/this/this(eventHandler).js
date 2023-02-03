const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(this); // <button class="btn"></button>
});
