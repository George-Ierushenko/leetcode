/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
  const hashList = new Array(nums.length + 1)

  for (const num of nums) {
    if (num > nums.length + 1 || num < 1) continue

    hashList[num] = true
  }

  for (let i = 1; i <= nums.length + 1; i++) {
    if (hashList[i] === true) continue

    return i
  }
}
