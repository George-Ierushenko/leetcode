/**
 * @param {string}
 * @return {boolean}
 */

const PARENTHESES = { '{': '}', '[': ']', '(': ')' }

var isValid = function (str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const bracket = str.charAt(i)

    if (PARENTHESES[bracket] !== undefined) {
      stack.push(bracket)

      continue
    }

    const last = stack.pop()
    if (PARENTHESES[last] === bracket) continue

    return false
  }

  return stack.length === 0
}

console.log(isValid('['))
