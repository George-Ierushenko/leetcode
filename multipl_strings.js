/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  const product = []

  for (let i = num1.length - 1; i >= 0; i--) {
    const iA = num1.charCodeAt(i) - 48

    for (let j = num2.length - 1; j >= 0; j--) {
      const index = num1.length - 1 - i + (num2.length - 1 - j)
      const jA = num2.charCodeAt(j) - 48

      const value = jA * iA
      if (value > 9)
        product[index + 1] = (product[index + 1] ?? 0) + Math.floor(value / 10)

      product[index] = (product[index] ?? 0) + (value % 10)
    }
  }

  for (let i = 0; i < product.length; i++) {
    if (product[i] > 9) {
      product[i + 1] = (product[i + 1] ?? 0) + Math.floor(product[i] / 10)
      product[i] = (product[i] % 10).toString()

      continue
    }

    product[i] = product[i].toString()
  }

  return product.reverse().join('')
}

console.log(multiply('123', '123'))
