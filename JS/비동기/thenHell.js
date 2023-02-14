function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = "fetch data";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(function (data) {
    console.log("Data received:", data);
    return fetchData();
  })
  .then(function (data) {
    console.log("Data received:", data);
    // return fetchData();
  })
  .then(function (data) {
    console.log("Data received:", data);
    return fetchData();
  })
  .then(function (data) {
    console.log("Data received:", data);
  })
  .catch(function (error) {
    console.error(error);
  });
