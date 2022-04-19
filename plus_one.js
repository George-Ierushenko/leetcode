/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  plusRecursively(digits)

  return digits
}

var plusRecursively = (digits, i = digits.length - 1) => {
  if (digits[i] == 9) {
    digits[i] = 0

    if (i == 0) digits.unshift(0), i++

    return plusRecursively(digits, i - 1)
  }

  digits[i] += 1
}

console.log(plusOne([9, 9, 9]))
