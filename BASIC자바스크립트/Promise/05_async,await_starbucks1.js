const starbucks = function (coffeeName) {
  return new Promise((resol, rejec) => {
    if (coffeeName === "아메리카노") {
      resol("아메리카노 한 잔입니다.");
    } else {
      rejec("아메리카노만 판매합니다.");
    }
  });
};

async function americano() {
  const result = await starbucks("카페라떼");
  return result;
}

americano();

/**
 * output
 * 아메리카노만 판매합니다.
 */
