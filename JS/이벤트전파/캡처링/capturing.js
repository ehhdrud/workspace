const outer = document.querySelector("#outer");
outer.addEventListener(
  "click",
  function () {
    console.log("outer clicked");
  },
  true
);

const inner = document.querySelector("#inner");
inner.addEventListener(
  "click",
  function () {
    console.log("inner clicked");
  },
  true
);

const btn = document.querySelector("#btn");
btn.addEventListener(
  "click",
  function (event) {
    console.log("button clicked");
  },
  true
);
