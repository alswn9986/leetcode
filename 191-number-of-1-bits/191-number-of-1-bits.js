/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = '';
    while(n > 0) {
        binary = (n % 2) + '' + binary;
        n = parseInt(n / 2);
    }
    
    return binary.split('').filter(x => x == '1').length;
};