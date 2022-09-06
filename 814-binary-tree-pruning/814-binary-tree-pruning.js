/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    return containsOne(root)? root: null;
};

var containsOne = function(root) {
    if(root===null) return false;
    const left = containsOne(root.left);
    const right = containsOne(root.right);
    if(!left) {
        root.left=null;
    }
    if(!right) {
        root.right =null;
    }
    return root.val===1 || left || right;
}