const light = true;

console.log(light); // true

function firstFEC() {
  const light = false;
  console.log(light); // false

  function secondFEC() {
    console.log(light); // false
  }
  secondFEC();
}
firstFEC();
