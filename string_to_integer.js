/**
 * @param {string} s
 * @return {number}
 */

const MAX_INT = 2 ** 31 - 1
const MIN_INT = -MAX_INT - 1

var myAtoi = function (str) {
  const integer = getIntegerFrom(str)

  if (integer > MAX_INT) return MAX_INT

  if (integer < MIN_INT) return MIN_INT

  return integer
}

const getIntegerFrom = (str) => {
  let isNegative = null,
    integer = null

  const realInteger = () => (isNegative ? -1 : 1) * integer
  const shouldSkipSpace = (char) =>
    char === ' ' && integer == null && isNegative == null

  for (const char of str) {
    if (shouldSkipSpace(char)) continue

    if (char === '-' || char === '+') {
      if (isNegative !== null || integer !== null) return realInteger()

      isNegative = char === '-'
      continue
    }

    const charCode = char.charCodeAt(0)

    if (!(charCode > 47 && charCode < 58)) return realInteger()

    integer = integer * 10 + (charCode - 48)
  }

  return realInteger()
}

console.log(myAtoi('4193 with words'))
