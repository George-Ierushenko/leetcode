/**
 * @param {number} x
 * @return {number}
 */

const MAX_INT = (2 ** 31) - 1
const MIN_INT = -MAX_INT + 1

var reverse = function(x) {
    if (isOutOfBounds(x)) return 0
    
    let reversed = 0
    while (x != 0) {
        reversed = (reversed * 10) + x % 10
        
        x = divide(x)

        if (isOutOfBounds(reversed)) return 0
    }
    
    return reversed
};

const isOutOfBounds = (x)  => x > MAX_INT || x < MIN_INT

const divide = (x) => parseInt(x / 10)

console.log(reverse(1534236469));