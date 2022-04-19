/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    const ans = []

    const backtrack = (cur, rem) => {
        if (cur.length === nums.length) return ans.push(cur)

        for (let i = 0; i < rem.length; i++) {
            const copy = [...rem]
            copy.splice(i, 1)

            backtrack([...cur, rem[i]], copy)
        }
    }
    
    backtrack([], nums)
    return ans
};

console.log(permuteUnique([1,2,3,4, 5, 6]))