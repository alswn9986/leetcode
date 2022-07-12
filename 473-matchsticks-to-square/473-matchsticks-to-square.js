/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = function (nums) {
  if (!nums.length) {
    return false
  }
  const sum = nums.reduce((acc, num) => acc + num, 0)
  const length = sum / 4
  if (!Number.isInteger(length)) {
    return false
  }
  nums.sort((a, b) => b - a)
  const sums = new Array(4).fill(0)
  const aux = (index) => {
    if (index === nums.length) {
      return sums.every(x => x === length)
    }
    for (let i = 0; i < sums.length; i++) {
      if (sums[i] + nums[index] <= length) {
        sums[i] += nums[index]
        if (aux(index + 1)) {
          return true
        }
        sums[i] -= nums[index]
      }
    }
    return false
  }
  return aux(0)
}