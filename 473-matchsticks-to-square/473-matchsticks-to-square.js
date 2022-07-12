/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let n = matchsticks.length;
    if (n === null || n < 4) {
        return false;
    }
    let sum = matchsticks.reduce((acc, curr) => acc + curr, 0);
    
    matchsticks.sort((a, b) => a > b? -1 : 1);
    let side = sum / 4;
    let square = [0, 0, 0, 0];
    
    function dfs(i) {
        if (i === n) {
            return true;
        }
        
        for (let j = 0; j < square.length; j++) {
            if (matchsticks[i] + square[j] > side) {
                continue;
            }
            square[j] += matchsticks[i];
            if (dfs(i + 1)) {
                return true;
            }
            square[j] -= matchsticks[i];
        }
        return false;
    }
    
    return dfs(0);
};