let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums); //[ 'one', 'two' ]
console.log(nums.length); //2

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums); //[ 'one', 'two', once: 'once', twice: 'twice' ]
console.log(nums.length); //2

console.log(Object.getOwnPropertyDescriptors(nums));
