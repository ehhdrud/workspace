const one = Promise.resolve("1");
const two = new Promise((res) =>
  setTimeout(() => {
    res("2");
  }, 2000)
);
const three = Promise.resolve("3");

one
  .then((res1) => {
    console.log(res1);
    return two;
  })
  .then((res2) => {
    console.log(res2);
    return three;
  })
  .then((res3) => {
    console.log(res3);
  })
  .finally(() => console.log("END"));
/**
 * output
 * 1
 * 2
 * 3
 * END
 */
