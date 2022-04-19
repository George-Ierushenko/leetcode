/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const OPERATORS = { MATCH_ALL: '.', PRIORITY: '*' }

var isMatch = function (s, p) {
  var state = buildRegexpState(p)

  return matchByState(s, state)
}

const buildRegexpState = (regexp, i = 0) => {
  if (regexp.length - 1 == i) {
    const char = regexp[i]

    if (char == OPERATORS.PRIORITY) {
      return constructRegexpStateNode({ priority: true })
    }

    return constructRegexpStateNode({ char: char })
  }

  const state = buildRegexpState(regexp, i + 1)
  const char = regexp[i]

  if (state.priority && !state.char) {
    if (char == OPERATORS.PRIORITY)
      throw `Bad regexp on line '${i}': could not repeat OPERATORS.REPEAT_ALL`

    state.char = char
    return state
  }

  if (char == OPERATORS.PRIORITY) {
    state.prev = constructRegexpStateNode({ next: state, priority: true })

    return state.prev
  }

  state.prev = constructRegexpStateNode({ next: state, char: char })

  return state.prev
}

const constructRegexpStateNode = ({
  char,
  next,
  prev,
  priority = false,
} = {}) => ({
  char,
  next,
  priority,
  prev,
  hasTested: false,
  markTested: function () {
    this.hasTested = true
  },
})

const matchByState = (string, state) => {
  var lastPriority = null

  const isMatchChar = (char, patternChar) =>
    char === patternChar ||
    (patternChar === OPERATORS.MATCH_ALL && char !== undefined)
  const moveState = () => (state = state?.next)

  let i = 0
  while (i < string.length || !(state?.char || state?.hasTested)) {
    const char = string[i]
    const patternChar = state?.char
    if (!lastPriority && state?.priority) {
      lastPriority = state.char
      moveState()

      continue
    }

    if (state?.char === lastPriority) {
      if (state?.char !== char) {
        lastPriority = null

        moveState()
        continue
      }
      moveState()

      i++
      continue
    }

    if (isMatchChar(char, lastPriority)) {
      if (state?.char == lastPriority) state?.markTested()

      i++
      continue
    }

    if (isMatchChar(char, state?.char)) {
      lastPriority = state?.priority ? state.char : null

      moveState()

      i++
      continue
    }

    if (char === undefined && state?.priority) {
      moveState()

      continue
    }

    return false
  }

  return true
}

// const includeRequiredChars = (state, prevChar) => {
//   if (state?.priority === false && state?.char != prevChar) return true

//   if (state?.next === undefined) return false

//   return includeRequiredChars(state.next)
// }

console.log(isMatch('abbbc', 'a*b*bbbc'))```

a*ab
^
aab
^

priorityLast = a

a*ab 
  ^
aab
^

a*ab 
   ^
aab
 ^

 priorityLast == char


a*ab 
   ^
aab
  ^
``````
O(m*n)

a*b*bbbc
^
aabb
^

priorityLast = a

a*ab 
  ^
aab
^

a*ab 
   ^
aab
 ^

 priorityLast == char


a*ab 
   ^
aab
  ^
```
