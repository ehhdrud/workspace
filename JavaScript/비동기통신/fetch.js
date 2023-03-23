// 'https://example.com/data'에 GET 요청을 보내고, 응답을 반환받아 Promise 객체를 반환
fetch("https://example.com/data")
  // 응답(Response) 객체의 body를 JSON으로 변환하여 Promise 객체를 반환
  .then((response) => response.json())
  // JSON으로 변환된 데이터를 콘솔에 출력
  .then((data) => console.log(data))
  // 에러가 발생하면 에러 메시지를 콘솔에 출력
  .catch((error) => console.error(error));
