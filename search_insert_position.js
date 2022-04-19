/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let mid = Math.floor(nums.length / 2)

  while (
    target !== nums[mid] &&
    !(nums[mid - 1] < target && nums[mid] > target)
  ) {
    if (nums[mid] < target && mid === nums.length - 1) return mid + 1
    if (nums[mid] > target && mid === 0) return mid - 1

    const side = nums[mid] < target ? 1 : -1

    mid += Math.round(mid / 2) * side
  }

  return mid
}

console.log(searchInsert([1, 3, 5, 6, 10], 0))
