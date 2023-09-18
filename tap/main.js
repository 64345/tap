let twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let x = 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x]
      }
    }
  }
}

nums = [2,7,11,15]
target = 9

console.log(twoSum(nums, target))