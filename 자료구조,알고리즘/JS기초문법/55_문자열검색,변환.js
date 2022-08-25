//검색
let text = "hello world!!!";

console.log(text.indexOf("l")); //2 //첫번째로 만난 l의 위치를 리턴함
console.log(text.indexOf("l", 3)); //3 //3번째("hel")까지 건너뛰고 검색해서 두번째 l의 위치 리턴함
console.log(text.lastIndexOf("l")); //9 //뒤에서부터 시작해서 첫번째로 만난 l의 위치 리턴함

console.log(text.includes("HELLO")); //false //대소문자 구분해서 false 리턴
console.log(text.startsWith("ello", 1)); //true //ello로 시작하지 않으면 false 리턴. 그래서 첫번째("h") 건너뛰고 검색해서 true 리턴
console.log(text.endsWith("world")); //false //world로 끝나지 않으므로 false 리턴

//변환
let str = "Hello";
console.log(str.toUpperCase()); //HELLO //대문자로 변경
console.log(str.toLowerCase()); //hello //소문자로 변경
