/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  let l = 0,
    r = 0

  while (r < nums.length - 1 && l <= r) {
    r += farthestJump(nums, l, r, (l = r + 1))
  }

  return l <= r
}

const farthestJump = (nums, l, r) => {
  let farthest = nums[l] - (r - l)

  for (let i = l + 1; i < r + 1; i++) {
    if (nums[i] - (r - i) > farthest) {
      farthest = nums[i] - (r - i)
    }
  }

  return farthest
}

console.log(jump([1, 0, 10]))
