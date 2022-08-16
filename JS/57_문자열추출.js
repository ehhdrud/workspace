let text = "hello, world!!!";

console.log(text.slice(0, 5)); //hello //0번-4번 자리 출력
console.log(text.slice(4, 5)); //o //4번 자리 출력
console.log(text.slice(4)); //o, world!!! //4번자리 이후 출력
console.log(text.slice(-4)); //d!!! //-n이면 뒤에서n번째자리 이후 출력

console.log(text.slice(2, 6)); //llo,
console.log(text.slice(6, 2)); //   //출력안됨
console.log(text.substring(2, 6)); //llo,
console.log(text.substring(6, 2)); //llo, //substring은 내부적으로 (2, 6)으로 변환하여 출력

console.log(text.substr(2, 6)); //llo, w //2번 자리부터 6글자 출력
console.log(text.substr(-5, 3)); //ld! //-5번 자리부터 3글자 출력
