/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1

  while (l != r) {
    const sum = numbers[l] + numbers[r]

    if (sum === target) return [l + 1, r + 1]

    sum > target ? r-- : l++
  }

  return null
}

console.log(twoSum([2, 3, 4], 6), 9)
