const obj = {
  func: function () {
    console.log(this);
  },
};

obj.func(); // Object
