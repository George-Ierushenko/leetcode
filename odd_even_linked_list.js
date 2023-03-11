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
var oddEvenList = function(head) {
  let cur = head
  let tmp = null
  let prev = null

  let oddHead = head.next

  let i = 0
  while (cur) {
    tmp = cur?.next
    if (i % 2 == 0) prev = cur
    cur.next = cur?.next?.next ?? null

    cur = tmp
    i++
  }

  prev.next = oddHead

  return head
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))))))