const one = Promise.resolve("1");
const two = new Promise.resolve("2");
const three = Promise.resolve("3");

one
  .then((res1) => {
    console.log(res1);
    return two;
  })
  .then((res2) => {
    setTimeout(() => {
      console.log(res2);
    }, 2000);
    return three;
  })
  .then((res3) => {
    console.log(res3);
  })
  .finally(() => console.log("END")); //finally는 then이나 catch의 맨 뒤에 올 수 있음
/**
 * output
 * 1
 * 3
 * END
 * 2
 */
