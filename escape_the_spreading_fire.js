/**
 * @param {number[][]} grid
 * @return {number}
 */

const MAX_MINUTES = 10 ** 9
const MIN_MINUTES = -1

const GRASS = 0
const FIRE = 1
const WALL = 2

var maximumMinutes = function (grid) {
  const fireStages = simulateAllFireStages(grid)

  for (let i = 0; i < fireStages.length; i++) {
    const isSafeStage = hasWayToSafety(fireStages[i])

    if (isSafeStage) continue

    return i - 1
  }

  return MAX_MINUTES
}

const hasWayToSafety = (grid, x = 0, y = 0) => {
  if (grid[y]?.[x] !== GRASS) return false
  if (y === grid.length - 1 && x === grid[y].length - 1) return true

  return hasWayToSafety(grid, x + 1, y) || hasWayToSafety(grid, x, y + 1)
}

const cloneGrid = (grid) => grid.map((e) => e.map((ie) => ie))

const simulateAllFireStages = (grid) => {
  const stages = [grid]

  while (true) {
    const lastStage = stages.at(-1),
      nextStage = cloneGrid(lastStage)

    let hasChanges = false
    for (let y = 0; y < nextStage.length; y++) {
      for (let x = 0; x < nextStage[y].length; x++) {
        if (lastStage[y][x] !== FIRE) continue

        hasChanges = spreadFire(nextStage, lastStage, x, y) || hasChanges
      }
    }

    if (!hasChanges) break
    stages.push(nextStage)
  }

  return stages
}

const spreadFire = (spreadGrid, stageGrid, x, y) => {
  let hasChanges = false

  const replaceIf = (dx, dy) => {
    if (stageGrid[y + dy]?.[x + dx] !== GRASS) return

    hasChanges = true
    spreadGrid[y + dy][x + dx] = FIRE
  }

  replaceIf(1, 0)
  replaceIf(-1, 0)
  replaceIf(0, 1)
  replaceIf(0, -1)

  return hasChanges
}

console.log(
  maximumMinutes([
    [0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 1, 0],
    [0, 2, 0, 0, 1, 2, 0],
    [0, 0, 2, 2, 2, 0, 2],
    [0, 0, 0, 0, 0, 0, 0],
  ])
)
