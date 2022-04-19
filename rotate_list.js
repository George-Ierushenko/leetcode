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

var rotateRight = function (head, k) {
  if (!head || !head.next) return head

  let current = head
  const length = getLenth(head)
  for (let i = 0; i < k % length; i++) {
    current = singleRotate(current)
  }

  return current
}

const singleRotate = (head) => {
  let current = head,
    prev = head

  while (current?.next != null) (prev = current), (current = current?.next)

  prev.next = null
  current.next = head

  return current
}

const getLenth = (head) => {
  let length = 1
  let current = head

  while (current.next) (current = current.next), length++

  return length
}

const list2 = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
}

console.log(rotateRight(list2, 4))
