let index = 1000;

function local_func() {
  let index = 100;

  for (let index = 0; index < 10; index++) {
    console.log(index);
  }
  console.log(index);
}

local_func();
console.log(index);
