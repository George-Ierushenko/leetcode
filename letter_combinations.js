/**
 * @param {string} digits
 * @return {string[]}
 */

const ALPHABET = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
]

var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  let combinations = ALPHABET[+digits[0] - 2]

  for (let i = 1; i < digits.length; i++) {
    const curLetters = ALPHABET[+digits[i] - 2]

    const newcombs = []
    for (let k = 0; k < combinations.length; k++) {
      const comb = combinations[k]

      for (let letter of curLetters) {
        newcombs.push(comb + letter)
      }
    }

    combinations = newcombs
  }

  return combinations
}

// console.log(initialCombinations('2'))

console.log(letterCombinations('23'))
