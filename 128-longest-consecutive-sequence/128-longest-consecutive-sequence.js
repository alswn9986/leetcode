/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var set = new Set(nums);
    var longest = 0;
    for(x of set){
        if(!set.has(x-1)){
            var len = 0;
            while(set.has(x+len)){
                len++;
                longest = Math.max(longest, len);
            }
        }
    }
    return longest;
};