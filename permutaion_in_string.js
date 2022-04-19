/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
    let s1Hash = hashSubstring(s1, 0, s1.length)
    let windowHash = hashSubstring(s2, 0, s1.length)
    let matches = initialMatches(s1Hash, windowHash)
    
    for (let i = s1.length; i < s2.length; i++) {
        if (matches === 26) return true
 
        const toRemove =  s2[i - s1.length]
        const toAdd = s2[i]
    
        if (windowHash[toRemove] === s1Hash[toRemove]) matches -= 1
        windowHash[toRemove] = windowHash[toRemove] - 1
        if (windowHash[toRemove] === (s1Hash[toRemove] ?? 0)) matches += 1

        if ((windowHash[toAdd] ?? 0) === (s1Hash[toAdd] ?? 0)) matches -= 1
        windowHash[toAdd] = (windowHash[toAdd] ?? 0) + 1
        if (windowHash[toAdd] === s1Hash[toAdd]) matches += 1
    }
    
    return matches === 26
};


const initialMatches = (s1Hash, windowHash) => {
  let matches = 26

  for (let i = 97; i <= 122; i++) {
      const char = String.fromCharCode(i) 

      if (s1Hash[char] == windowHash[char]) continue
      matches -= 1
  }  
    
   return matches
}

const hashSubstring = (str, start, end) => {
    const table = {}
    
    for (let i = start; i < end; i++) {
        table[str[i]] = (table[str[i]] ?? 0) + 1
    }
    
    return table
}

console.log(checkInclusion(
    "rvwrk",
"lznomzggwrvrkxecjaq"
));
