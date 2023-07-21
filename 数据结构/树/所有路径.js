// 257. 二叉树的所有路径
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。

// 示例 1：
// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

// 示例 2：
// 输入：root = [1]
// 输出：["1"]
 
// 提示：
// 树中节点的数目在范围 [1, 100] 内
// -100 <= Node.val <= 100

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
 * @return {string[]}
 */
 var binaryTreePaths = function (root) {
    return !root ? [] : !root.left && !root.right ? [root.val.toString()] : binaryTreePaths(root.left).map(v => v = root.val + "->" + v).concat(binaryTreePaths(root.right).map(v => v = v ? root.val + "->" + v : v))
};