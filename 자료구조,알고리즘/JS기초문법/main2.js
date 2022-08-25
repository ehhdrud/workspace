let finish = ["A", "B", "C", "D"];
let submit = ["B", "C", "D", "E"];

let answer = 0;

for (let i; i < finish.length; i++) {
  if (submit.indexOf(finish[i]) !== -1) {
    answer = answer + 1;
  }
}

console.log(answer);

////////////////////////////////////

console.log(finish[0]);
console.log(submit.indexOf(finish[0]));
