/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length

  while (l < r) {
    const mid = Math.floor((l + r) / 2)

    if (nums[mid] === target) {
      l = Math.floor(mid / 2)

      continue
    }

    nums[mid] > target ? (r = mid - 1) : (l = mid + 1)
  }

  return [l, r]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
