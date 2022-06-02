/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = new Array();
    for (let i = 0; i < matrix[0].length; i ++) {
        let tempArr = new Array();
        for (let j = 0; j < matrix.length; j++) {
            tempArr.push(matrix[j][i]);
        }
        arr.push(tempArr);
    }
    return arr;
};