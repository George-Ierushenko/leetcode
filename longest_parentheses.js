/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (str) {
  str = str.split('')
  let stack = []

  for (let i = 0; i < str.length; i++) {
    const current = str[i]

    if (current === '(') {
      stack.push(current)

      continue
    }

    const last = stack.pop()

    if (last !== undefined) str[i] = 1
  }

  let longest = 0
  let current = 0
  let canSkip = 0

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === 1) {
      current++
      canSkip++

      continue
    }

    if (str[i] === ')') {
      longest = Math.max(longest, current)
      current = 0
      canSkip = 0

      continue
    }

    if (canSkip === 0) {
      longest = Math.max(longest, current)
      current = 0

      continue
    }

    canSkip--
  }

  return Math.max(longest, current) * 2
}

console.log(longestValidParentheses(')()())()()('))
