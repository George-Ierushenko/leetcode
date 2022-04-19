/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  var recursionRemoveNth = (head) => {
    if (head.next === null) {
      if (n === 1) return null

      return head
    }

    const next = recursionRemoveNth(head.next, n)

    n--
    if (n === 1) return head.next

    return { val: head.val, next: next }
  }

  return recursionRemoveNth(head)
}

var removeNthFromEndTwoPointers = function (head, n) {
  let closest = head,
    farthest = head

  while (--n && farthest.next) farthest = farthest.next

  if (n != 0) return head

  let previous = null
  while (farthest.next) {
    previous = closest

    closest = closest.next
    farthest = farthest.next
  }

  if (previous === null) return head.next

  previous.next = closest?.next

  return head
}

console.log(
  removeNthFromEndTwoPointers(
    {
      val: 1,
      next: { val: 2, next: null },
    },
    (n = 2)
  )
)
