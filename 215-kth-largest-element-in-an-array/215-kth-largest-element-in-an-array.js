/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((n1, n2) => n1 < n2 ? 1 : -1);
    return nums[k - 1]
};