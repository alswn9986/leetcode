/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks = 0, ladders = 0) {

    function insert(array, value) {
        var low = 0,
            high = array.length;

        while (low < high) {
            const mid = (low + high) >>> 1;
            if (array[mid] < value) low = mid + 1;
            else high = mid;
        }
        array.splice(low, 0, value);
    }

    const ladderSizes = [];

    for (let i = 0, l = heights.length - 1; i < l; i++) {
        const delta = heights[i + 1] - heights[i];

        if (delta <= 0) continue;

        if (ladders) {
            insert(ladderSizes, delta);
            ladders--;
            continue;
        }

        const small = ladderSizes[0];
        if (small <= delta && bricks >= small) {
            bricks -= ladderSizes.shift();
            insert(ladderSizes, delta);
            continue;
        }

        if (bricks >= delta) {
            bricks -= delta;
            continue;
        }
        return i;
    }
    return heights.length - 1;
};        
