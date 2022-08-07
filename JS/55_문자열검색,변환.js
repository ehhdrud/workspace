//검색
let text = "hello world!!!";

console.log(text.indexOf("l")); //output:2 첫번째로 만난 l의 위치를 리턴함
console.log(text.indexOf("l", 3)); //3번째(hel)까지 건너뛰고 검색해서 두번째 l의 위치 리턴함
console.log(text.lastIndexOf("l")); // 뒤에서부터 시작해서 첫번째로 만난 l의 위치 리턴함

console.log(text.includes("HELLO")); //대소문자 구분함
console.log(text.startsWith("ello", 1)); //ello로 시작하지 않으면 false 리턴. 그래서 첫번째(h) 건너뛰고 검색해서 true 리턴
console.log(text.endsWith("world")); //world로 끝나지 않으므로 false리턴

//변환
let str = "HeLlo";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
