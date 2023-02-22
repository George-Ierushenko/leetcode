/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function(numCourses, prerequisites) {
    const nodes = {}

    for (const [a, b] of prerequisites) {
        nodes[a] = { name: a, required: [] }
        nodes[a].required.push(b)
    }

    const edges = Object.values(nodes)

    const takenCourses = []
    for (const node of edges) {
      if (takenCourses.includes(node.name)) continue

      const courses = followNodeChains(nodes, node)
      if (courses === null) return false

      takenCourses.push(...courses)
    }

    return true
}

const followNodeChains = (nodes, node, startCourseName) => {
  const { name, required } = node
  startCourseName ??= name

  const takenCourses = [name]
  for (const courseName of required) {
    if (courseName === startCourseName) return null

    const next = nodes[courseName]
    if (!next) {
      continue
    }

    const courses = followNodeChains(nodes, next, startCourseName)
    if (courses === null) {
      return null
    }

    takenCourses.push(...courses)
  }

  return takenCourses
}

console.log(canFinish(2, [[0,1],[3,1],[1,3]]))