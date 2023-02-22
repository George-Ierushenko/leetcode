/**
 * @param {string} s
 * @return {number}
 */

var calculate = function (s) {
  const context = { index: 0 }

  const next = () => {
    const stack = []

    const nextNumber = () => {
        while (
           parseInt(s.charAt(context.index))
        )
    }

    while (context.index < s.length) {
      const char = s.charAt(context.index)
      context.index += 1

      if (char === ' ') continue
    }
  }

  return value
}

console.log(calculate('24 / (3 - 2)'))
