const targetObj = {
  name: "Alice",
  age: 25,
};

const proxyObj = new Proxy(targetObj, {
  set(target, key, value) {
    console.log(`Setting '${key}' to '${value}'`);
  },
});

proxyObj.name = "Bob"; // Setting 'name' to 'Bob'
console.log(targetObj.name); // Alice
