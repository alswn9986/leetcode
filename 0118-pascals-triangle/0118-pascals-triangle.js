/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res= [[1],[1,1]];
    if(numRows <= 1) {
        return [res[numRows-1]];
    }

    for(var i = 2 ; i < numRows ; i++) {
        res[i] = [];
        res[i].push(1);
        for(var j = 0 ; j < res[i-1].length -1 ; j++) {
            var sum = res[i-1][j]+res[i-1][j+1]
            res[i].push(sum);
        }
        res[i].push(1);
    }
    return res;
};