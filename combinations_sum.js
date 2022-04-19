/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  const solutions = []

  const backtrack = (i = 0, current = [], currentSum = 0, canSkip = true) => {
    if (i >= candidates.length || currentSum > target) return null

    const sum = candidates[i] + currentSum
    const array = [...current, candidates[i]]

    if (canSkip) backtrack(i + 1, current, currentSum)

    if (sum === target) return solutions.push(array)

    backtrack(i, array, sum, false)
    backtrack(i + 1, array, sum)
  }

  backtrack()
  return solutions
}

console.log(combinationSum([11, 6, 5, 8, 3, 12, 7, 4], 12))
