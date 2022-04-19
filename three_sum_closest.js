/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let closest = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    const number = nums[i]
    if (number === nums[i - 1]) continue

    let l = i + 1,
      r = nums.length - 1

    while (l < r) {
      const sum = number + nums[l] + nums[r]

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum
      }

      sum > target ? r-- : l++
    }
  }

  return closest
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
