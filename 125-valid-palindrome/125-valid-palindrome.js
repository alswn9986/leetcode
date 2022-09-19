/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-z0-9]+/gi,'').toUpperCase();
    return s===s.split('').reverse().join('');
};