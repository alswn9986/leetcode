/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let answer = true;
  let hash = {};
  s = s.split("");
  t = t.split("");
  s.forEach((v) => {
    if (hash.hasOwnProperty(v)) {
      hash[v] += 1;
    } else {
      hash[v] = 1;
    }
  });

  t.forEach((v) => {
    if (hash.hasOwnProperty(v)) {
      if (hash[v] === 0) return (answer = false);
      hash[v] -= 1;
    } else {
      return (answer = false);
    }
  });

  return answer;
};