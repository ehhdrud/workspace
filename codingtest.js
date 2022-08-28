function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i]) === true) {
      let arr2 = arr.slice(i, i + 1);
    }
  }

  answer = arr2;
  return answer;
}

console.log(solution([1, 2, 3, 4]));
