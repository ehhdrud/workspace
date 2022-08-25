//붕어빵 틀
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

//붕어빵 종류
//new연산자를 통해 생성자 함수로 객체 생성
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1); //FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2); //FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3); //FishBread { flavor: 'milk', price: 1500, base: 'flour' }
