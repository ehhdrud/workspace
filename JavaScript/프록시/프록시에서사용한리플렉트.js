const targetObj = {
  name: "dongkyeong",
  age: 25,
};

const proxyObj = new Proxy(targetObj, {
  set(target, key, value) {
    console.log(`Setting '${key}' to '${value}'`);
    Reflect.set(target, key, value);
  },
});

proxyObj.name = "seo"; // Setting 'name' to 'seo'
console.log(targetObj.name); // seo
