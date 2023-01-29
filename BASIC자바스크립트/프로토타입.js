const arr = new Array();

const arrProto = arr.__proto__;
const arrayConstructor = Array.prototype.constructor;
const arrayPrototype = Array.prototype;

console.log(arrProto);
console.log(arrayConstructor);
console.log(arrayPrototype);

const arrayProto = Array.__proto__;
const objectConstructor = Object.prototype.constructor;
const objectPrototype = Object.prototype;

console.log(arrayProto);
console.log(objectConstructor);
console.log(objectPrototype);
