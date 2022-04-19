/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (node1, node2) {
  let node = new ListNode(0, null)

  _reduceSum(node1, node2, node)

  return node
}

const _reduceSum = (node1, node2, to) => {
  let sum = (to.val ?? 0) + (node1.val ?? 0) + (node2.val ?? 0)

  if (sum >= 10) {
    to.next = new ListNode(1, null)

    sum = 10 - sum
  }

  to.val = sum

  if (node1.next == null && node2.next == null) return
  _reduceSum(
    node1.next ?? {},
    node2.next ?? {},
    (to.next ??= new ListNode(0, null))
  )
}

class ListNode {
  val
  next
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const _reduceCopy = (who, to) => {
  to.val = who.val
  if (who.next == null) return

  _reduceCopy(who.next, (to.next = {}))
}

const _addTwoNumbers = (node1, node2, current = {}) => {
  let sum = (current.val ?? 0) + node1.val + node2.val

  if (sum >= 10) {
    current.next = { val: 1 }

    sum = sum % 10
  }

  current.val = sum
  return current
}

console.log(
  addTwoNumbers(
    { val: 2, next: { val: 4, next: { val: 3, next: null } } },
    { val: 5, next: { val: 6, next: { val: 4, next: null } } }
  )
)
