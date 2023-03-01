// 타겟 객체에서도 처리하도록 한 코드
const targetObj = {
  name: "dongkyeong",
};

const proxyObj = new Proxy(targetObj, {
  set(target, key, value) {
    console.log(`Setting '${key}' to '${value}'`);
    target[key] = value;
  },
});

proxyObj.name = "seo"; // Setting 'name' to 'seo'
console.log(targetObj.name); // seo
