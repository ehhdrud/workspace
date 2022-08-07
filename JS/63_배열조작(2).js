let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1)); //output:[ 'orange', 'melon' ] -> index=1부터 잘라서 리턴
console.log(fruits); // output:[ 'apple' ] -> index=0만 살아남음

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); //output:[ 'orange' ] -> index=1 이후 삭제하는데 그중에 하나만 삭제
console.log(fruits); // output:[ 'apple', 'melon', 'strawberry' ]
console.log(fruits.splice(1, 1, "mango", "kiwi")); //output:[ 'melon' ] -> melon 삭제하고 그 자리에 mango, kiwi 박아버림
console.log(fruits); //output:[ 'apple', 'mango', 'kiwi', 'strawberry' ]
