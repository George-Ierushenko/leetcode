/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  const sums = []

  for (let i = 0; i < nums.length - 2; i++) {
    const number = nums[i]
    if (number === nums[i - 1]) continue

    let l = i + 1,
      r = nums.length - 1

    const target = -1 * number
    while (l < r) {
      const sum = nums[l] + nums[r]

      if (sum === target) {
        sums.push([number, nums[l], nums[r]])
        while (nums[l] === nums[l + 1]) l++

        r--, l++

        continue
      }

      sum > target ? r-- : l++
    }
  }

  return sums
}

console.log(threeSum([-2, 0, 0, 2, 2]))

//  [-1, -1, 0, 1, 2, -4]
