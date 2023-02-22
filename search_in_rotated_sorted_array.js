/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  let l = 0, r = nums.length - 1

  const between = (l, r) => l < target && target < r

  while(l < r) {
    const mid = l + Math.floor((r - l) / 2)
    const vl = nums[l], vm = nums[mid], vr = nums[r]
      if (nums[mid] === target) return mid


      if (vl < vm) {
          between(vl, vm) ? r = mid : l = mid

          continue
      }

      if (vr > vm) {
          between(vm, vr) ? l = mid : r = mid

          continue
      }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 3))