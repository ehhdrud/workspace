let text = "helLo, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text); //helLo, earth!!!

console.log(text.replace("!", "?")); //helLo, world?!!
console.log(text.replace("l", "i")); //heiLo, world!!!

//정규표현식 활용 문자열 치환
console.log(text.replace(/l/g, "i")); //heiLo, worid!!!
console.log(text.replace(/l/gi, "i")); //heiio, worid!!!
