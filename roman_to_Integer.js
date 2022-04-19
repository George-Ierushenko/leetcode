/**
 * @param {string} s
 * @return {number}
 */

const SYMBOLS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function (s) {
  let integer = 0

  let pInt = 0,
    pSymbol = ''

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i]

    if (pSymbol === symbol) {
      integer += pInt

      continue
    }

    let int = SYMBOLS[symbol]

    if (pInt !== 0 && pInt < int) {
      int = int - 2 * pInt
    }

    integer += int

    pInt = int
    pSymbol = symbol
  }

  return integer
}

console.log(romanToInt('XC'))
