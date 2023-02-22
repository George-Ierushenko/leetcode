/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = (jug1Capacity, jug2Capacity, targetCapacity) => {
  const solve = (jug1, jug2) => {
    if ([jug1, jug2].includes(targetCapacity)) return true

    const sum = jug1 + jug2

    const capSum1 = Math.min(jug1Capacity, sum)
    const capSum2 = Math.min(jug2Capacity, sum)

    console.log(jug1, jug2)

    return (
      (jug1 !== jug1Capacity && solve(jug1Capacity, jug2)) ||
      (jug2 !== jug2Capacity && solve(jug1, jug2Capacity)) ||
      (jug1 !== 0 && jug1 !== jug1Capacity && solve(sum - capSum2, capSum2)) ||
      (jug1 !== 0 && solve(0, jug2)) ||
      (jug2 !== 0 && jug2 !== jug2Capacity && solve(capSum1, sum - capSum1)) ||
      (jug2 !== 0 && solve(jug1, 0))
    )
  }

  return solve(0, 0)
}

console.log(canMeasureWater(3, 5, 4))
