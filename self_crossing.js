/**
 * @param {number[]} distance
 * @return {boolean}
 */
 var isSelfCrossing = function(distance) {
    let first = 0
    while (first < distance.length) {
        if (!distance[first + 2] || distance[first] < distance[first + 2]) {
            first++
             
            continue    
        }
        
        first += 2
        break
    }
     
     if (first === distance.length) return false
     
     distance.reverse()
     
     for (let i = 0; i + first <= distance.length; i++) {
        if (
            distance[i] + distance[i + 4] >= distance[i + 2] && 
            (i === 0 ? 
                distance[i + 1] === distance[i + 3] : 
                distance[i + 1] > distance[i + 3] && distance[i - 1] + distance[i + 3] >= distance[i + 1]
             )    
        ) {
            return true
        }
     }
     
    return false
};

console.log(isSelfCrossing([2,1,1,2]));


    //  distance.reverse()
     
    //  for (let i = 0; i + first + 2 < distance.length; i++) {
    //      if (
    //          distance[i] + distance[i + 4] >= distance[i + 2] && 
            //  (i === 0 ? 
            //     distance[i + 1] === distance[i + 3] : 
            //     distance[i + 1] > distance[i + 3] && distance[i - 1] + distance[i + 3] >= distance[i + 1]
            //  )
    //         ) {
    //             return true
    //         }
         
         
    //     if (distance[i] >= distance[i + 2]) {
    //         return true
    //     }
    //  }

// [2,2,3,1,1]