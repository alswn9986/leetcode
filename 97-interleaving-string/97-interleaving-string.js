/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    	if(s1.length+s2.length!=s3.length) return false;
    let dp=new Map();
    return solve(0,0,0);
    
    function solve(idx, s1i,s2i){
        if(idx>=s3.length && s1i>=s1.length && s2i>=s2.length) return true;
        let key = idx+':'+s1i+':'+s2i;
        if(dp.has(key)) return dp.get(key);
        let rst = false;
        if(s3[idx]==s1[s1i]) rst = rst || solve(idx+1,s1i+1,s2i);
        if(rst ==false && s3[idx]==s2[s2i]) rst = rst || solve(idx+1,s1i,s2i+1);
        dp.set(key,rst);
        return rst;    
    }

};