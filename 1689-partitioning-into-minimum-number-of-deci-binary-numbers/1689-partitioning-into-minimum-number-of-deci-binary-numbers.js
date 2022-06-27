/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    return Math.max.apply(null, n.split('').map(Number))
}