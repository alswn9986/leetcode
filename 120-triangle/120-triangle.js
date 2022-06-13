/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let d = triangle[triangle.length - 1]
    
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle.length; j++) {
            d[j] = triangle[i][j] + Math.min(d[j], d[j + 1]);
        }
    }
    
    return d[0];
};