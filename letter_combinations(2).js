/**
 * @param {string} digits
 * @return {string[]}
 */

const LETTERS = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

var letterCombinations = function (digits) {
  const res = []

  const backtrack = (i, str) => {
    if (str.length === digits.length) {
      return res.push(str)
    }

    for (const letter of LETTERS[digits[i]]) {
      backtrack(i + 1, str + letter)
    }
  }

  if (digits.length !== 0) backtrack(0, '')

  return res
}

console.log(letterCombinations('2'))
