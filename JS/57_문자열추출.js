let text = "hello, world!!!";

console.log(text.slice(0, 5)); //0번-4번 자리 출력
console.log(text.slice(4, 5)); //4번 자리 출력
console.log(text.slice(4)); //4번자리 이후 출력
console.log(text.slice(-4)); //-n이면 뒤에서n번째자리 이후 출력

console.log(text.slice(2, 6));
console.log(text.slice(6, 2)); //출력안됨
console.log(text.substring(2, 6));
console.log(text.substring(6, 2)); //substring은 내부적으로 (2, 6)으로 변환하여 출력, 장점이지만 단점이 될 수 있어서 대게 slice를 주로 사용

console.log(text.substr(2, 6)); //2번 자리부터 6글자 출력
console.log(text.substr(-5, 3)); //-5번 자리부터 3글자 출력
