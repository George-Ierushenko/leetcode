/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ipAddresses = []

  var backtrack = (i = 0, value = '', ip = []) => {
    if (value + s[i] > 255) return

    if (i >= s.length || ip.length === 4) {
      if (i !== s.length || ip.length !== 4) return

      return ipAddresses.push(ip.join('.'))
    }

    if (value === '0') return backtrack(i + 1, s[i], [...ip, value])

    backtrack(i + 1, value + s[i], ip)
    // if (value + s[i] !== '0') backtrack(i + 1, '', [...ip, value + s[i]])
  }

  backtrack()
  return ipAddresses
}

console.log(restoreIpAddresses('0000'))
