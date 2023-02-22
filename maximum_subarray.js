/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let global_max = nums[0]
    let local_max = 0

    for (let i = 0; i < nums.length; i++) {
      local_max = Math.max(nums[i], local_max + nums[i])
      global_max = Math.max(local_max, global_max)
    }

    return global_max
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// [-2, -1, -4, 0, -1, 1, 2, -3, 1]
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// [-2, -1, -2, 1,  3, 1, 3, -1, 4]