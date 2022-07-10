/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for (let i = cost.length - 3; ~i; i--) {
        console.log(i);
        cost[i] += Math.min(cost[i+1], cost[i+2])
    }
    console.log(cost)
    return Math.min(cost[0], cost[1])
};