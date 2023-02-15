// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// 서버의 데이터를 요청하는 GET 메서드 요청
xhr.open("GET", "https://example.com/data.json");

// 응답 상태코드가 200이면 데이터를 받아온 것이므로 처리
xhr.onload = function () {
  if (xhr.status === 200) {
    // 서버에서 받아온 JSON 데이터 파싱
    const responseData = JSON.parse(xhr.responseText);
    console.log(responseData); // 콘솔에 데이터 출력
  }
  // 응답 상태코드가 200이 아니면 데이터를 받아오지 못한 것이므로 오류 출력
  else {
    console.error("Failed to load data");
  }
};

// 요청 전송
xhr.send();
