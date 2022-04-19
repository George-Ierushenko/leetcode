/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
  replaceNegatives(nums)
  hashList(nums)

  for (let i = 1; i <= nums.length + 1; i++) {
    if (nums[i - 1] < 0) continue

    return i
  }
}

var replaceNegatives = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) continue

    nums[i] = 0
  }
}

var hashList = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const value = Math.abs(nums[i]) - 1
    if (value > nums.length || value < 0 || nums[value] < 0) continue

    if (nums[value] === 0) nums[value] = -(value + 1)
    else nums[value] *= -1
  }
}

console.log(firstMissingPositive([0, 1, 2]))
