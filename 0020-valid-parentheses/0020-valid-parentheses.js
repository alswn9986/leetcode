/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracketsPairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  const neededBrackets = []

  const sArray = s.split('')

  for (let i = 0; i < sArray.length; i++) {
    if (bracketsPairs[sArray[i]]) {
      neededBrackets.unshift(bracketsPairs[sArray[i]])
      continue
    } else if (neededBrackets[0] !== sArray[i]) {
      return false
    } else {
      neededBrackets.splice(0, 1)
    }
  }

  return neededBrackets.length ? false : true
};