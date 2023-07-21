// 98. 验证二叉搜索树
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

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
 * @return {boolean}
 */
 var isValidBST = function (root) {
    if (!root.left && !root.right) return true
    let leftmax = root.left
    while (leftmax && leftmax.right) {
        leftmax = leftmax.right
    }
    let rightmin = root.right
    while (rightmin && rightmin.left) {
        rightmin = rightmin.left
    }
    if (!root.left && root.right) return (rightmin.val > root.val) && isValidBST(root.right)
    if (root.left && !root.right) return (leftmax.val < root.val) && isValidBST(root.left)
    if (root.left && root.right) {
        if (leftmax.val < root.val && rightmin.val > root.val && isValidBST(root.left) && isValidBST(root.right)) return true
        else return false
    }
};

// 优化上面的递归得到
let foo = (root, lower, upper) => {
    return !root ? true : (root.val <= lower || root.val >= upper) ? false : foo(root.left, lower, root.val) && foo(root.right, root.val, upper)
}
var isValidBST = function (root) {
    return foo(root, -Infinity, Infinity)
};

// 中序遍历的方法
var isValidBST = function (root) {
    let stack = [];
    let inorder = -Infinity;
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};