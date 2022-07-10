/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const prices = new Array(cost.length + 1);
    
    prices[0] = 0;
    prices[1] = 0;
    
    for (i = 2; i < prices.length; i++) {
        prices[i] = Math.min(cost[i-2]+prices[i-2], cost[i-1]+prices[i-1]);
    }
    
    return prices[prices.length - 1];
};