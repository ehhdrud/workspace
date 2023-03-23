const starbucks = function (coffeeName) {
  return new Promise((resol, rejec) => {
    if (coffeeName === "아메리카노") {
      resol("아메리카노 한 잔입니다.");
    } else {
      rejec("아메리카노만 판매합니다.");
    }
  });
};

starbucks("카페라떼")
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {
    console.log("감사합니다.");
  });

/**
 * output
 * 아메리카노만 판매합니다.
 * 감사합니다.
 */
