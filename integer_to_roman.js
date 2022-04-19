/**
 * @param {number} num
 * @return {string}
 */

const SYMBOLS = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']]

var intToRoman = function (num) {
  let roman = ''

  let symbolsIndex = 0

  const decreaseNum = () => {
    num = parseInt(num / 10)
  }

  while (num > 0) {
    const symbols = SYMBOLS[symbolsIndex] || []
    const integer = num % 10

    roman = quadrupleRomanMaker(integer, symbols) + roman

    decreaseNum()
    symbolsIndex++
  }

  return roman
}

const quadrupleRomanMaker = (integer, symbols) => {
  const [one, five, ten] = symbols

  if (integer > 5) {
    return afterFiveRomanMaker(integer, one, five, ten)
  }

  return tillFiveRomanMaker(integer, one, five)
}

const afterFiveRomanMaker = (integer, one, five, ten) => {
  if (integer === 10) return ten
  if (integer === 9) return one + ten

  return five + one.repeat(integer - 5)
}

const tillFiveRomanMaker = (integer, one, five) => {
  if (integer === 5) return five

  if (integer === 4) return one + five

  return one.repeat(integer)
}

console.log(romanNumerals(111))
