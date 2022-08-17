let str = new Set("Hello!");

console.log(str); //Set(5) { 'H', 'e', 'l', 'o', '!' }

for (let item of str) console.log(item); //H e l o ! //value가 item으로 리턴
for (let item of str.keys()) console.log(item); //H e l o ! //set은 key가 없으므로 value가 리턴
for (let item of str.values()) console.log(item); //H e l o !
for (let item of str.entries()) console.log(item); //[ 'H', 'H' ] [ 'e', 'e' ] [ 'l', 'l' ] [ 'o', 'o' ] [ '!', '!' ] //Map과 호환성을 위해 [value, value]형태로 반환

console.log(str.keys); //[Function: values]
console.log(str.entries); //[Function: entries]
