function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = "fetch data";
      resolve(data);
    }, 1000);
  });
}

async function fetchAndLogData() {
  try {
    let data = await fetchData();
    console.log("Data received:", data);
    data = await fetchData();
    console.log("Data received:", data);
    data = await fetchData();
    console.log("Data received:", data);
    data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error(error);
  }
}

fetchAndLogData();
