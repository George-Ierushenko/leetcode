/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
  const primes = Array(n).fill(true)

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i; j * i < n; j++) {
        primes[i * j] = false
      }
    }
  }

  return primes.reduce((p, v) => p + v) - 2
};

