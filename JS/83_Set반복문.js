let str = new Set("Hello!");

console.log(str);

for (let item of str) console.log(item);
for (let item of str.keys()) console.log(item);
for (let item of str.values()) console.log(item);
for (let item of str.entries()) console.log(item); //모두 같은 결과 반환!

console.log(str.keys); //[values]
console.log(str.entries); //[values, values] <- Map과 호환성을 위해 존재
