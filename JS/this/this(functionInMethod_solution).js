const obj = {
  func: function () {
    const that = this; // Object를 가리키는 this를 변수에 저장하고,
    console.log(this);
    function innerFunc() {
      console.log(that); // 그 변수(that)를 this 대신 가져다 쓴다 !
    }
    innerFunc();
  },
};

obj.func();
