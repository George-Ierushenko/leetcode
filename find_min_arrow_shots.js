/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => b[0] - a[0])

  let arrows = 0
  while (points.length != 0) {
    let point = points.pop()

    for (let i = points.length - 1; i >= 0; i--) {
      if (!canBeShootBeOneArrow(point, points[points.length - 1])) break

      point = narrowDown(points.pop(), point)
    }

    arrows++
  }

  return arrows
}

const narrowDown = (point1, point2) => {
  return [Math.max(point1[0], point2[0]), Math.min(point1[1], point2[1])]
}

const canBeShootBeOneArrow = (point1, point2) => {
  const isBetween = (target, point) => point[0] <= target && target <= point[1]

  let min = Math.min(point1[1], point2[1]),
    max = Math.max(point1[1], point2[1])

  return isBetween(min, [point2[0], max])
}
