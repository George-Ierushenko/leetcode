/**
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function(points) {  
    const getSlope = ([x1, y1], [x2, y2]) => {
        if (x1 === x2) return 'inf' 

        return ((y2 - y1) / (x2 - x1)).toString()
    }

    let maxans = 1;
    for (let i = 0; i < points.length; i++) {
        const hashMap = {}
        for (let j = i + 1; j < points.length; j++) {
            const slope = getSlope(points[i], points[j])
            hashMap[slope] = (hashMap[slope] ?? 1) + 1
        }

        maxans = Math.max(...Object.values(hashMap), maxans)
    }
    
    return maxans
};  

console.log(maxPoints([[1,1],[2,2],[3,3]]));