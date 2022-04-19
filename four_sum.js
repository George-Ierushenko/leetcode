/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)

  const sums = []

  for (let f = 0; f < nums.length - 3; f++) {
    const numberF = nums[f]
    if (numberF === nums[f - 1]) continue

    for (let i = f + 1; i < nums.length - 2; i++) {
      const number = nums[i]
      if (i !== f + 1 && number === nums[i - 1]) continue

      let l = i + 1,
        r = nums.length - 1

      const targetSum = target - numberF - number
      while (l < r) {
        const sum = nums[l] + nums[r]

        if (sum === targetSum) {
          sums.push([numberF, number, nums[l], nums[r]])
          while (nums[l] === nums[l + 1]) l++

          r--, l++

          continue
        }

        sum > targetSum ? r-- : l++
      }
    }
  }

  return sums
}

console.log(fourSum([2, 2, 2, 2, 2], 8))
