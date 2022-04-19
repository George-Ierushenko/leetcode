/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  if (p == null && q == null) return true
  if (p?.val !== q?.val) return false

  const left = isSameTree(p?.left, q?.left)
  const right = left && isSameTree(p?.right, q?.right)

  return left && right
}

const tree1 = {
  value: 1,
  left: {
    value: 2,
    right: null,
    left: null,
  },
}

const tree2 = {
  value: 1,
  right: {
    value: 2,
    right: null,
    left: null,
  },
  left: null,
}

console.log(isSameTree(tree1, tree2))
