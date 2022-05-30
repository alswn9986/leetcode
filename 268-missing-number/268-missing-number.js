/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    while (n > -1) {
        if (!nums.includes(n)) {
            return n;
        }
        n--;
    }
};