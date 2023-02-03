const parts = ["Chest", "Back", "Shoulder", "Leg"];

parts.forEach(function (part) {
  console.log(part);
  console.log(this); // Object
}, this);
