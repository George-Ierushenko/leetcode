/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const sumIndex = nums.lastIndexOf(target - nums[i])

    if (sumIndex != -1 && i != sumIndex) {
      return sumIndex > i ? [i, sumIndex] : [sumIndex, i]
    }
  }

  return []
}

console.log(twoSum([1, 2], 3))
