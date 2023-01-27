const arr = new Array();

const arrProto1 = arr.__proto__;
console.log(arrProto1);

const arrProto2 = arrProto1.__proto__;
console.log(arrProto2);

const arrProto3 = arrProto2.__proto__;
console.log(arrProto3);
