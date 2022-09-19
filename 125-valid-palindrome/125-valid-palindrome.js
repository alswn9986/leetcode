/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerS = s.toLowerCase()
    let left = 0
    let right = lowerS.length - 1
    
    const isValidChar = (char) => {
       const isLetter = char < 'a' || char > 'z'
       const isNumber = char < '0' || char > '9'
       
       return isLetter && isNumber
    }
    
    while (left < right) {
       while ((left < right) && isValidChar(lowerS[left]))
        left++
       while ((left < right) && isValidChar(lowerS[right]))
        right--
        
        if (lowerS[right] !== lowerS[left]) {
            return false
        }
        
        left++
        right--
    }
    return true
    
};