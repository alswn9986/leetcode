/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b) => {
        b.length - a.length
    })
    
    let prefix = strs[0]
    for (let i=prefix.length; i>=0; i--) {
        if (hasPrefix(prefix, strs)) {
           return prefix 
        }
        prefix = prefix.substring(0, i);
    }
    return prefix 
    
};

const hasPrefix = (prefix, strs) => {
    return strs.every(str => {
        return str.substring(0,prefix.length) === prefix
    })
}