/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function (head) {
  const hashmap = createHashmap(head)

  let current = head
  for (let i = 0; i < Math.floor(hashmap.length / 2); i++) {
    current.next = hashmap[hashmap.length - i - 1]
    current = current.next

    current.next = hashmap[i + 1]
    current = current.next
  }

  current.next = null
}

var createHashmap = (head) => {
  let current = head
  let hashmap = []

  while (current !== null) {
    hashmap.push(current)

    current = current.next
  }

  return hashmap
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
        next: null,
      },
      next: null,
    },
  },
}

reorderList(head)
console.log(JSON.stringify(head, null, 1))
