function fetchData(callback) {
  setTimeout(function () {
    const data = "fetch data";
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log(data);
});

console.log("hi");
