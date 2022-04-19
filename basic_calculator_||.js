/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    const { value } = recCalculate(s)

    return value
};

const recCalculate = (exp, start) => {
    let evalStack = []
    
    const nextValid = (exp, start = 0) => {
        const curExp = exp.substring(start).trimStart()

        const realIndex = (curIndex = 0) => exp.length - (curExp.length - curIndex)
        const isNumber = (char) =>  !Number.isNaN(+char)

        if (curExp.length === 0) return { index: exp.length }

        if (isNumber(curExp[0])) {
            let value = curExp[0]

            for (let i = 1; i < curExp.length; i++) {
                if (curExp[i] === ' ' || !isNumber(curExp[i])) {
                    return { 
                        value: +value, 
                        index: realIndex(i)
                    }
                }

                value += curExp[i]
            } 

            return { value: +value, index: exp.length }
        }

        if (curExp[0] === '(') {
            return recCalculate(exp, realIndex() + 1)
        }

        if (curExp[0] === ')') {
            return { forceBreak: true }
        }
 
        return { value: curExp[0], index: realIndex() + 1 }
    }

    const incrementIndex = (newIndex) => i = newIndex

    let i = start
    while ({ value, index, forceBreak } = nextValid(exp, i)) {
        incrementIndex(index)
        if (value === '*' || value === '/') {
            const leftNum = evalStack.pop()
            const { value: rightNum, index, forceBreak  } = nextValid(exp, i)

            evalStack.push(value === '*' ? leftNum * rightNum : Math.trunc(leftNum / rightNum))

            incrementIndex(index)
            if (forceBreak) break
        } else if (value !== undefined) {
            evalStack.push(value)
        }

        if (i >= exp.length || forceBreak) break
    }

    evalStack.reverse()

    while (evalStack.length > 1) {
        const leftNum = evalStack.pop()
        const operator = evalStack.pop()
        const rightNum = evalStack.pop()

        evalStack.push(operator === '+' ? +leftNum + +rightNum : +leftNum - +rightNum)
    }

    return { value: evalStack[0] ?? 0, index: i }
}
console.log(calculate('24 / (3 - 2)'))
