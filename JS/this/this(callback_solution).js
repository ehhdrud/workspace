const obj = {
  bodyParts: ["Chest", "Back", "Shoulder", "Leg"],
  getInfo: function () {
    console.log(this); // Object
    this.bodyParts.forEach(function (bodyPart) {
      console.log(bodyPart);
      console.log(this); // Object
    }, this);
  },
};

obj.getInfo();
