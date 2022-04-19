var FreqStack = function () {
  this.stack = []
  this.tracker = {}
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  const index = (this.tracker[val] = (this.tracker[val] ?? 0) + 1)
  if (index > this.stack.length) this.stack.push([])

  this.stack[index - 1].push(val)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const value = this.stack[this.stack.length - 1]?.pop()
  if (value === undefined) return

  this.tracker[value] -= 1
  if (this.stack[this.stack.length - 1].length === 0) this.stack.pop()

  return value
}

var obj = new FreqStack()
obj.push(5)
obj.push(4)
obj.push(3)
obj.push(5)
var param_2 = obj.pop()
var param_3 = obj.pop()
console.log(param_2, param_3)
