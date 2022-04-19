/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
  const triangleHeight = triangle.length
  const dp = triangle[triangleHeight - 1]

  for (let i = triangleHeight - 1; i > 0; i--) {
    for (let j = 0; j < triangle[i - 1].length; j++) {
      dp[j] = triangle[i - 1][j] + Math.min(dp[j], dp[j + 1])
    }
  }

  return dp[0]
}

console.log(minimumTotal([[-10]]))
