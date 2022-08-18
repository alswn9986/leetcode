/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    if(strs.length <1) return result;
    const first = strs[0]; // flower
    for(let i = 0; i<first.length ; i++){
        const c = first[i]; // f, l, o, w, e, r 
        
        for(let j = 1;j<strs.length;j++){
            if(strs[j][i] !== c) return result; // f"l"ow, fl"o"w
        }
        result += c;
    }
    return result;
};