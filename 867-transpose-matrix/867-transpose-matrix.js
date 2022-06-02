/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let width = matrix[0].length;
    let height = matrix.length;
    let arr = new Array();
    
    for (let i = 0; i < width; i ++) {
        let tempArr = new Array();
        for (let j = 0; j < height; j++) {
            tempArr.push(matrix[j][i]);
        }
        arr.push(tempArr);
    }
    return arr;
};