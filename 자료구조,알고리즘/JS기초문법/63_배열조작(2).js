let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1)); //[ 'orange', 'melon' ] //index=1부터 삭제해서 리턴
console.log(fruits); //[ 'apple' ] //index=0만 살아남음

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); //[ 'orange' ] //index=1부터 삭제하는데 그중에 1개만 삭제해서 리턴
console.log(fruits); //[ 'apple', 'melon', 'strawberry' ]
console.log(fruits.splice(1, 1, "mango", "kiwi")); //[ 'melon' ] //index=1부터 삭제하는데 그중에 1개만 삭제해서 리턴, 그 자리엔 mango, kiwi 삽입
console.log(fruits); //[ 'apple', 'mango', 'kiwi', 'strawberry' ]
