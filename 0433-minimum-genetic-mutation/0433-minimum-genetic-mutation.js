/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    const allowed = new Set(bank)
    const seen = new Set([start])
    const genes = ['A', 'C', 'G', 'T']
    
    const getNeighbors = node => {
        const res = []
        for (const gene of genes) {
            for (let i = 0; i < node.length; i++) {
               const neighbor = node.slice(0, i) + gene + node.slice(i + 1)
               if (!seen.has(neighbor) && allowed.has(neighbor)) {
                   res.push(neighbor)
                   seen.add(neighbor)
               }
            }
        }
            
        return res
    }
    
    let steps = 0
    const queue = [start]
    
    while (queue.length) {
        const {length} = queue
        
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            
            if (node === end) {
                return steps
            }
            
            queue.push(...getNeighbors(node))
        }
        
        steps++
    }
    
    return -1
};
