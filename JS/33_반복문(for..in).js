const person = { fname: "DongKyeong", lname: "Seo", age: 28 };

let text = "";

for (let x in person) {
  text += person[x];
}

console.log(text);
