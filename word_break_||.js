/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
 var wordBreak = function(s, wordDict) {
    const wordHash = {}
    wordDict.forEach(el => wordHash[el] = 1)
    
    const solutions = []

    const backtrack = (i, str, output) => {
        if (i === s.length) 
            return str.length === 0 && solutions.push(output)
        
        const nstr = str + s[i]
        if (wordHash[nstr] !== undefined) {
            backtrack(i + 1, '', output + (output.length === 0 ? '' : ' ') + nstr)
        }
    
        return backtrack(i + 1, nstr, output)
    }   
    
    backtrack(0, '', [])
    return solutions
};


console.log(wordBreak('catsanddog', ["cat","cats","and","sand","dog"]));