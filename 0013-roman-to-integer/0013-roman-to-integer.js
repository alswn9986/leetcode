/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    const num = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for (i = 0; i < s.length; i++){
        const cur = num[s[i]];
        const next = num[s[i+1]];

        if (cur < next){
            res += next - cur
            i++
        } else {
            res += cur
        }
    }

    return res; 
};