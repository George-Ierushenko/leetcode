/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (heights) {
  let trapped = 0
  let waterState = null
  let lastHighestPoint = null

  const trappedWaterIn = (to) => {
    const height = Math.min(heights[to], heights[waterState.start])
    const width = to - waterState.start - 1

    return height * width - waterState.bricks
  }

  for (let i = 0; i < heights.length; i++) {
    const barLength = heights[i]

    if (waterState !== null && barLength >= heights[waterState.start]) {
      trapped += trappedWaterIn(i)
      waterState = buildWaterState(i)
      lastHighestPoint = null

      continue
    }

    if (waterState === null) {
      if (barLength === 0) continue

      waterState = buildWaterState(i)
      continue
    }

    if (lastHighestPoint === null || heights[lastHighestPoint] <= barLength)
      lastHighestPoint = i

    waterState.bricks += barLength
  }

  return trapped + trapRest(heights, waterState, lastHighestPoint)
}

var trapRest = (heights, waterState, lastHighestPoint) => {
  if (
    waterState === null ||
    lastHighestPoint === null ||
    waterState.start === lastHighestPoint
  )
    return 0

  const length = lastHighestPoint - waterState.start - 1
  const maxHeight = Math.min(
    heights[waterState.start],
    heights[lastHighestPoint]
  )
  let bricks = 0

  for (let i = waterState.start + 1; i < lastHighestPoint; i++) {
    bricks += Math.min(heights[i], maxHeight)
  }

  return length * maxHeight - bricks
}

const buildWaterState = (start, bricks = 0) => ({
  start,
  bricks,
})

console.log(trap([5, 4, 1, 2]))
