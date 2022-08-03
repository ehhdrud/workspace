let text = "helLo, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text);
console.log(text);

console.log(text.replace("!", "?"));
console.log(text.replace("l", "i"));

//정규표현식 활용 문자열 치환
console.log(text.replace(/l/g, "i")); //모든 l이 i로 바뀜(g인자)
console.log(text.replace(/l/gi, "i")); //대소문자 구분없이 치환(i인자)해서 l이 아닌 L도 i로 바뀜
