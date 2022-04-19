/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
  let l = 0,
    r = heights.length - 1

  let largestArea = 0
  while (l != r) {
    const lV = heights[l],
      rV = heights[r]

    const area = (r - l) * Math.min(lV, rV)
    largestArea = Math.max(largestArea, area)

    if (lV > rV) {
      r--
    } else {
      l++
    }
  }

  return largestArea
}

console.log(maxArea([4, 3, 2, 1, 4]))
