function solution(finish, submit) {
  var answer = 0;

  for (let i; i < finish.length; i++) {
    if (submit.indexOf(finish[i]) !== "-1") answer++;
  }

  return answer;
}

solution(["A", "B", "C", "D"], ["B", "C", "D", "E"]);
