/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return []

  let ans = [root]

  for (let i = 0; i < ans.length; i++) {
    let node = ans.at(i)

    if (node?.left ?? false) ans.push(node.left)
  }

  for (let i = ans.length-1; i != -1; i--) {
    let node = ans.at(i)

    if (node?.right  ?? false) ans.push(node.right)
  }

  for (let i = 0; i < ans.length; i++) {
    ans[i] = ans.at(i).val
  }

  return ans
};

console.log(preorderTraversal(
  {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4
        }
      }
    }
  }
))