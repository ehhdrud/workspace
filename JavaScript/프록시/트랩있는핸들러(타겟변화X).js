// 타겟 객체에는 아무런 처리가 없는 코드
const targetObj = {
  name: "dongkyeong",
};

const proxyObj = new Proxy(targetObj, {
  set(target, key, value) {
    console.log(`Setting '${key}' to '${value}'`);
  },
});

proxyObj.name = "seo"; // Setting 'name' to 'seo'
console.log(targetObj.name); // dongkyenog
