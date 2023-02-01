const starbucks = function (coffeeName) {
  return new Promise((resol, rejec) => {
    if (coffeeName === "아메리카노") {
      resol("아메리카노 한 잔입니다.");
    } else {
      rejec("아메리카노만 판매합니다.");
    }
  });
};

async function americano(drink) {
  try {
    const result = await starbucks(drink);
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("감사합니다.");
  }
}

americano("카페라떼");

/**
 * output
 * 아메리카노만 판매합니다.
 * 감사합니다.
 */
