/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length == 0 || s[0] == '0') return 0
  const dp = [1]

  for (var i = 1; i < s.length; i++) {
    dp[i] = s[i] === '0' ? 0 : dp[i - 1]

    const value = s[i - 1] + s[i]
    if (value >= '10' && value <= '26') dp[i] += i > 1 ? dp[i - 2] : 1
  }

  return dp[s.length - 1]
}

console.log(numDecodings('12345621'))
