/**
 * @param {string} s
 * @return {number}
 */
const operators = ['*', '/', '+', '-']

var calculate = function (s) {
    const { value } = recCalculate(s)
    return value
};

const recCalculate = (s, start = 0) => {
    const isNumber = (char) => !Number.isNaN(+char)

    const evalStack = []

    let curNumber = ''
    let curOperator = '+'
    let index = 0

    for (index = start; index < s.length; index++) {
        const curChar = s[index]

        if (isNumber(curChar)) {
            curNumber += curChar

            if (index !== s.length - 1) continue
        }

        if (curChar === '(') {
            const { value, index: newIndex } = recCalculate(s, index + 1)

            curNumber = value, index = newIndex
        }

        if (curNumber !== '') {
            if (curOperator === '*' || curOperator === '/') {
                const leftNum = evalStack.pop()
                const rightNum = +curNumber

                evalStack.push(curOperator === '*' ? leftNum * rightNum : Math.trunc(leftNum / rightNum))
            } else {
                evalStack.push(curOperator === '-' ? -curNumber : +curNumber)
            }

            curNumber = ''
        }


        if (operators.includes(curChar)) {
            curOperator = curChar

            continue
        }

        if (curChar === ')') break
    }

    const value = evalStack.reduce((sum, val) => sum + val, 0)
    return { value, index }
}

console.log(calculate("10 - 3"))