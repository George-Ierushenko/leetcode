/**
 * @param {number[][]} dungeon
 * @return {number}
 */

var calculateMinimumHP = function (dungeon) {
  for (let i = dungeon.length - 1; i >= 0; i--) {
    for (let j = dungeon[0].length - 1; j >= 0; j--) {
      if (i === dungeon.length - 1 && j === dungeon[0].length - 1) {
        if (dungeon[i][j] - 1 < 0) dungeon[i][j] = Math.abs(dungeon[i][j]) + 1
        else dungeon[i][j] = 0

        continue
      }

      const rightward = dungeon[i][j + 1] ?? Infinity
      const downward = (dungeon[i + 1] ?? [])[j] ?? Infinity

      const least = Math.min(rightward, downward)
      const current = dungeon[i][j] - (least == 0 ? 1 : least)

      if (current < 0) {
        dungeon[i][j] = Math.abs(current)

        continue
      }

      dungeon[i][j] = 0
    }
  }

  return Math.max(dungeon[0][0])
}

console.log(calculateMinimumHP([[100]]))
