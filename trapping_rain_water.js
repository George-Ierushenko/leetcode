/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (heights) {
  let ans = 0

  let left = 0,
    right = heights.length - 1
  let leftMax = 0,
    rightMax = 0

  while (left < right) {
    if (heights[left] < heights[right]) {
      leftMax = Math.max(leftMax, heights[left])
      ans += Math.max(leftMax - heights[left], 0)
      left++

      continue
    }

    rightMax = Math.max(rightMax, heights[right])
    ans += Math.max(rightMax - heights[right], 0)
    right--
  }

  return ans
}

console.log(trap([4, 2, 0, 3, 2, 5]))
