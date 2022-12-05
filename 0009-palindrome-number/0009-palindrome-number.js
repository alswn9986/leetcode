/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    const xString = x.toString();
    for(let i=0;i<xString.length/2;i++){
    	if(xString[i] != xString[xString.length-i-1]) {
      	return false;
      }
    }
    return true;
};