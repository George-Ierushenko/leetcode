/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substring = '',
    longest = 0

  for (const char of s) {
    const charIndexForSubstring = substring.indexOf(char)

    if (charIndexForSubstring == -1) {
      substring += char

      const substringLength = substring.length
      longest = longest > substringLength ? longest : substringLength

      continue
    }

    substring = substring.slice(charIndexForSubstring + 1) + char
  }

  return longest
}

console.log(lengthOfLongestSubstring('bbbbb'))
