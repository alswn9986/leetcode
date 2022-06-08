/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    // 앞 뒤가 똑같은 경우 palindromic subsequence
    if (s.length === 0)  return 0;
    return [...s].reverse().join('') == s ? 1 : 2;
};