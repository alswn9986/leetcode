/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueElements = new Set(nums);
    const filteredElements = nums.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
            return false;
        } else {
            return true;
        }
    });
    return filteredElements.length === 0 ? false : true
};
