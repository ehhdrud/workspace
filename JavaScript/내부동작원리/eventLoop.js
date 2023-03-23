const firstFunc = () => {
  console.log("First");
  setTimeout(function () {
    console.log("Timeout");
  }, 0);
  secondFunc();
};

const secondFunc = () => {
  console.log("Second");
};

firstFunc();
