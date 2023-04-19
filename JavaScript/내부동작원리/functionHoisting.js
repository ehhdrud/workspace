//함수 표현식
getFirstName(); // error

var getFirstName = () => {
  console.log("Dong Kyeong");
};

//함수 선언식
getLastName(); // Seo

function getLastName() {
  console.log("Seo");
}
