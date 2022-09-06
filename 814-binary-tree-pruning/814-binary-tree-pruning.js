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
    // basic case:
    if (root === null) return root;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    // found 1 or has children then no need to remove
    if (root.val === 1 || root.left || root.right) 
        return root;
    else // remove node
        return null;
};