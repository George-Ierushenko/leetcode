/**
 * @param {character[][]} grid
 * @return {number}
 */

const DIRECTIONS = [[0, -1], [1, 0], [0, 1], [-1, 0]]

var numIslands = function(grid) {
    let land = []
    let count = 0
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
           const key = keyify(x, y)
           if (land.includes(key) || isWater(grid, x, y)) continue

            land.push(...normilizeIslandIn(grid, x, y))
            count++
        }
    }

    return count
};

var keyify = (x, y) => `${x} ${y}`

var isWater = (grid, x, y) => (grid?.[y]?.[x] ?? '0') === '0'

var normilizeIslandIn = (grid, dx, dy) => {
  const island = [keyify(dx, dy)]
  const queue = [[dx, dy]]
  while (queue.length) {
    const [x, y] = queue.pop()
    for (const [vx, vy] of DIRECTIONS) {
      const key = keyify(+x+vx, +y+vy)
      if (island.includes(key) || isWater(grid, +x+vx, +y+vy))  continue

      island.push(key)
      queue.push([+x+vx, +y+vy])
    }
  }

  return island
}

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
))