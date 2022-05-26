/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let input = n.toString(2).split('');
    return input.filter(x => x == '1').length;
};