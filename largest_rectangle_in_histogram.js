/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {
  let maxArea = 0
  const stack = []

  for (let i = 0; i < heights.length; i++) {
    const last = stack[stack.length - 1]
    const current = buildNode(i, heights[i])

    if (last === undefined || last.height < current.height) {
      stack.push(current)

      continue
    }

    if (last.height > current.height) {
      maxArea = Math.max(maxArea, popUpStackUntil(stack, current, i))

      continue
    }
  }

  return Math.max(maxArea, endPopStackToCalculateRest(stack, heights.length))
}

const buildNode = (index, height) => ({ index, height })

const popUpStackUntil = (stack, current, i) => {
  let maxArea = 0

  while (stack[stack.length - 1]?.height >= current.height) {
    const last = stack.pop()

    current.index = last.index
    maxArea = Math.max(maxArea, (i - last.index) * last.height)
  }

  stack.push(current)

  return maxArea
}

const endPopStackToCalculateRest = (stack, initialLength) => {
  let maxArea = 0

  while (stack.length != 0) {
    const last = stack.pop()

    maxArea = Math.max(maxArea, (initialLength - last.index) * last.height)
  }

  return maxArea
}

console.log(largestRectangleArea([6, 5, 7, 4, 8]))
