/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opener = { ')': '(', ']': '[', '}': '{' };
  const closerFound = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      closerFound.push(s[i]);
    } else if (s[i] !== opener[closerFound.pop()]) {
      return false;
    }
  }

  return closerFound.length === 0;
};