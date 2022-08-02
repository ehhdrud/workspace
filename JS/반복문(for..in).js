const person = { fname: "DongKyeong", lname: "Seo", age: 28 };

let text = "";

//for(key in object){}
for (let x in person) {
  text += person[x]; //text = text + person[x] (person객체의 각 key들이 for문을 통해 할당되고, 더해짐)
}

console.log(text);
