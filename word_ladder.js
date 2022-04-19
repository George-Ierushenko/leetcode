/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

 var ladderLength = function(beginWord, endWord, wordList) {
    
    wordList.push(beginWord)

    const patternsDic = {}
    wordList.forEach(
        (word) => {
            for (let i = 0; i < word.length; i++) {
                const newone = word.substring(0, i) + "*" + word.substring(i + 1)

                if (patternsDic[newone] === undefined) {
                    patternsDic[newone] = [word]
        
                    continue
                } 

                patternsDic[newone].push(word)
            }
        }
    )
    
    const visitedDic = {}
    const queue = [[beginWord, 1]]
    while (queue.length) {
        const [word, level] = queue.shift()
        
        if (word === endWord) return level
        
        for (let i = 0; i < word.length; i++) {
            const newone = word.substring(0, i) + '*' + word.substring(i + 1)
            const children = patternsDic[newone]
                
            if (children.length === 1) continue

            for (const child of children) {
                if (child === word || visitedDic[child]) continue

                queue.push([child, level + 1])
                visitedDic[child] = true
            }
        } 
        
    }
        
    return 0
};

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"]))