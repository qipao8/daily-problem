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
 * @return {number[]}
 */
 var preorderTraversal = function (root) {
    let stack = [], res = []
    if(!root) return res
    stack.push(root)
    while (stack.length) {
        root.val != 0 ? res.push(root.val) : ''
        root.right ? stack.push(root.right) : ''
        root.left ? stack.push(root.left) : ''
        root = stack.pop()
    }
    return res
};
// 当遍历节点时，如果当前节点的左节点还包含子节点，而当前节点的右节点不为空，那么对于先序遍历肯定是先将右节点保存，再先遍历左节点。
// 先保存右节点，等左节点遍历完再遍历右节点的这个过程，正是先进后出的过程。因此使用栈而不是队列！

// 简化
var preorderTraversal = function (root,res=[]) {
    if(!root) return res
    let stack = []
    stack.push(root)
    while (stack.length) {
        res.push(root.val)
        root.right&&stack.push(root.right)
        root.left&&stack.push(root.left)
        root=stack.pop()
    }
    return res
};