function func() {
  return Promise.resolve(1).then(() => undefined);
}

async function asyncFunc() {
  await 1;
}

console.log(func()); // Promise { <pending> }
console.log(asyncFunc()); // Promise { <pending> }
