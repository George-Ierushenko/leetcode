/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const result = []
  const backtrack = (str, open = 0, close = 0) => {
    if (str.length === n * 2) {
      return result.push(str)
    }

    if (open !== n) {
      backtrack(str + '(', open + 1, close)
    }

    if (close < open) {
      backtrack(str + ')', open, close + 1)
    }
  }

  backtrack('')

  return result
}

console.log(generateParenthesis(50))
