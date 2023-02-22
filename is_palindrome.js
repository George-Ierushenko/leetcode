/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const middlePointer = getMiddlePointer(head)

  const _isPalindrome = (p2) => {
      if (p2.next && !_isPalindrome(p2.next)) return false

      if (head.val !== p2.val) return false

      head = head.next
      return true
  }

  return _isPalindrome(middlePointer)
};

var getMiddlePointer = (head) => {
  let fast = head
  let slow = head

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))))

