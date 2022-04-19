/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
  let divend = Math.abs(dividend)
  let divos = Math.abs(divisor)
  let res = 0

  while (divend >= divos) {
    let tmp = divos
    let mult = 1

    while (tmp + tmp < divos) {
      res++
      tmp += tmp
      mult += mult
    }

    divend -= tmp
    res++
  }

  if ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) {
    return -res
  }

  return res
}

console.log(divide(10, 2))
