/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  const swapped = swapFirstTwo(head)

  let current = head?.next?.next
  while (current) {
    const pair = swapFirstTwo(current)

    addToEnd(swapped, pair)

    current = current?.next?.next
  }

  return swapped
}

var swapFirstTwo = (head, pair) => {
  if (head.next === null || pair === true) {
    return constructNode(head.val)
  }

  const node = swapFirstTwo(head.next, true)

  node.next = constructNode(head.val)

  return node
}

const addToEnd = (head, node) => {
  if (head.next === null) {
    head.next = node

    return
  }

  addToEnd(head.next, node)
}

const constructNode = (val, next) => ({
  val: val === undefined ? 0 : val,
  next: next === undefined ? null : next,
})

const head = {
  val: 1,
  next: {
    val: 2,
    next: null,
    next: {
      val: 3,
      //   next: null,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
}

console.log(JSON.stringify(swapPairs(head), null, 1))
