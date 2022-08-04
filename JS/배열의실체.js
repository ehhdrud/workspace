let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums);
console.log(nums.length);

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums);
console.log(nums.length);

console.log(Object.getOwnPropertyDescriptors(nums));
