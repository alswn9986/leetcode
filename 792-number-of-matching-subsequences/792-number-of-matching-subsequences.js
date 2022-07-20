/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let count = 0;
    for(const word of words) {
        // let idx = 0;
        let currIdx = 0; 
        let lenMatched = 0;
        for(let char of word) {
            currIdx = s.indexOf(char, currIdx);
            if(currIdx >= 0) {
                // idx++;
                currIdx++;
                lenMatched++;
            }
        }
        if(lenMatched === word.length) count++
    }
    return count;
};