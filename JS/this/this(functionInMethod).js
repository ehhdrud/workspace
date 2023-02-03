const obj = {
  func: function () {
    function innerFunc() {
      console.log(this);
    }
    innerFunc();
  },
};

obj.func(); // Window
