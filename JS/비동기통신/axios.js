// 'https://example.com/data'에 GET 요청을 보내고, 응답을 반환받아 Promise 객체를 반환
axios
  .get("https://example.com/data")
  // 서버에서 반환한 응답(Response) 데이터 중에서 'data' 속성을 콘솔에 출력
  .then((response) => console.log(response.data))
  // 에러가 발생하면 에러 메시지를 콘솔에 출력
  .catch((error) => console.error(error));
