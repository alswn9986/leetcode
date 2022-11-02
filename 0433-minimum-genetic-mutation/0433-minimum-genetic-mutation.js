/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    var set = new Set(bank);
    var visited = new Set();
    visited.add(start);
    if(!set.has(end))   return -1;
    var count = dfs(start);
    
    if(count === Number.MAX_VALUE)  return -1;
    return count;
    
    //@ return min_path
    
    function dfs(a){
        if(oneM(a,end)) return 1;
        
        var min = Number.MAX_VALUE;
        
        set.forEach((b)=>{
            if(oneM(a,b) && !visited.has(b)){
                visited.add(b);
                var c = dfs(b);
                if(c!==Number.MAX_VALUE){
                    min = Math.min(min,c+1);
                }
                visited.delete(b);
            }
        });
        
        return min;
    }
};


var oneM = function(a,b){
    var count = 0;
    for(var i =0;i<a.length;i++){
        if(a[i]!==b[i]){
            count++;
        }
    }
    return count===1;
};