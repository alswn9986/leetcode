/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = (words1, words2) => {

  const ans = []

  const letterHash = {}

  for (let i = 0; i < words2.length; i++) {
    const item = counter(words2[i])
    for (let key in item) {
      letterHash[key] = Math.max(item[key], letterHash[key] || 0)
    }
  }


  for (let i = 0; i < words1.length; i++) {
    const item = counter(words1[i])
    let isOk = true
    for (let key in letterHash) {
      const x = item[key] || 0
      const y = letterHash[key]
      if (x < y) {
        isOk = false
        break
      }
    }
    if (isOk) {
      ans.push(words1[i])
    }
  }

  return ans

  function counter (str) {
    const map = {}
    for (let i = 0; i < str.length; i++) {
      const item = str[i]
      if (!map[item]) {
        map[item] = 0
      }
      map[item]++
    }
    return map
  }
}