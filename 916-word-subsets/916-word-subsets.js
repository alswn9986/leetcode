/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    let order1 = 0;
    let temp = new Int8Array(26);
    let maxWordArr = new Int8Array(26);
    let wordCount = 0;
    for (let i = 0; i < words2.length; i++) {
        for (let j = 0; j < words2[i].length; j++) {
            temp[words2[i].charCodeAt(j) - 97]++;
        }
        for (let k = 0; k < 26; k++) {
            if (temp[k] > 0 && temp[k] > maxWordArr[k]) {
                maxWordArr[k] = temp[k];
                wordCount += maxWordArr[k];
                if (wordCount > 10) return [];
            }
        }
        wordCount = 0;
        temp.fill();
    }
    while (words1.length > order1) {
        let resultArr = new Int8Array(26);
        for (let i = 0; i < words1[order1].length; i++) {
            resultArr[words1[order1].charCodeAt(i) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            if (maxWordArr[i] > 0) {
                resultArr[i] -= maxWordArr[i] ;
            }
        }
        if (resultArr.some(el => el < 0)) {
            words1.splice(order1, 1);
        } else{
            order1++;
        }
    }
    return words1;
};