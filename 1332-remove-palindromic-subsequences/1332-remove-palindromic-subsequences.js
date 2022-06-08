/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s.length === 0)  return 0;
    return [...s].reverse().join('') == s ? 1 : 2;
};