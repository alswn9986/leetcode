/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
  // sort in descending order, biggest to smallest, otherwise TLE
  matchsticks = matchsticks.sort((a,b) => b - a) 
  
  let sum = matchsticks.reduce((a,b) => a + b, 0)
  
  if (sum % 4 != 0) {
    return false
  }
  
  const SIDE = sum / 4
  let square = new Array(4).fill(0)
  
  return backtrack(0)
  
  // takes in i index of matchsticks
  // returns true if can make full square
  function backtrack(i) { 
    if (i == matchsticks.length) {
      return true
    }
    
    for (let j = 0; j < 4; j++) {
      if (square[j] + matchsticks[i] > SIDE) continue
      
      square[j] += matchsticks[i]
      if (backtrack(i + 1)) {
        return true
      }
      square[j] -= matchsticks[i]
    }
    
    return false
  }
};