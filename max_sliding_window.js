/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  const window = []
  const queue = []

  for (let i = 0; i < nums.length; i++) {
    dequeue(queue, nums[i], i)
    if (i < k - 1) continue

    const [num, index] = queue[0]
    if (index === i - k) queue.shift()

    window.push(queue[0][0])
  }

  return window
};

const dequeue = (queue, num, i) => {
  while (true) {
    const [lastNum] = queue.at(-1) ?? []
    if (lastNum === undefined  || lastNum > num) break

    queue.pop()
  }

  queue.push([num, i])
}

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3))