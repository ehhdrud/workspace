let text = "";

for (let i = 0; i < 10; i++) {
  if (i == 3) break;
  text += i;
}
console.log(text);

text = "";

for (let i = 0; i < 10; i++) {
  if (i == 3) continue;
  text += i;
}
console.log(text);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break;
  }
}

end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break end;
  }
}
