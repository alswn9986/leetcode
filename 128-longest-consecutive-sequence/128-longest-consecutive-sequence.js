/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let arr = [...new Set(nums)];
    arr = arr.sort((a,b) => a - b);
    let max = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1] + 1) {
            count++;
        }
        else {
            count = 1;
        }
        max = Math.max(max, count);
    }
    return max;
};