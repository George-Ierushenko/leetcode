/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let longest = {}

  for (let i = 0; i < s.length; i++) {
    const data1 = expandFromMiddleSingle(s, i, i)
    const data2 = expandFromMiddleDouble(s, i, i + 1)

    const maxData = data1.length > data2.length ? data1 : data2

    if (maxData.length < longest.length) continue

    longest = maxData
  }

  return s.substring(longest.left, longest.right + 1)
}

const expandFromMiddleDouble = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] == s[right]) left--, right++

  return constructExpandData(right - 1, left + 1)
}

const expandFromMiddleSingle = (s, left, right) => {
  do {
    left--, right++
  } while (left >= 0 && right < s.length && s[left] == s[right])

  return constructExpandData(right - 1, left + 1)
}

const constructExpandData = (right, left) => ({
  right: right,
  left: left,
  length: right - left,
})

console.log(longestPalindrome('ababa'))
