/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let store = new Set();
    for (const num of nums) {
        if (store.has(num)) {
            return true;
        } else {
            store.add(num);
        }
    }
    
    return false;
};