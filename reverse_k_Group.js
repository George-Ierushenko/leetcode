/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
  const root = constructListNode(0, null)
  var prev = root
  var cur = head

  while (cur != null) {
    const trail = cur

    for (let i = 0; i < k && cur != null; i++) {
      if (cur.next === null && k - 1 != i) {
        prev.next = trail

        return root.next
      }

      cur = cur.next
    }

    prev.next = reverse(trail, k)
    prev = trail
  }

  return root.next
}

var reverse = function (head, k) {
  let actual = head,
    reversed = null

  for (let i = 1; i <= k; i++) {
    const next = actual.next

    actual.next = reversed
    reversed = actual
    actual = next
  }

  return reversed
}

const constructListNode = (val, next) => ({
  val: val === undefined ? 0 : val,
  next: next === undefined ? null : next,
})
