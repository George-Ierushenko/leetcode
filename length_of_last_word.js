/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastLetterIndex = null
  let i = s.length - 1

  for (; i >= 0; i--) {
    if (lastLetterIndex == null) {
      if (s[i] !== ' ') lastLetterIndex = i

      continue
    }

    if (s[i] === ' ') break
  }

  return (lastLetterIndex ?? s.length) - i
}

console.log(
  lengthOfLastWord(
    'themoonthemoonthemoonthemoonthemoonthemoonthemoon    themoon  '
  )
)
