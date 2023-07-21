function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 前序&中序
let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
var buildTree = function (preorder, inorder) {
    const cur = preorder.shift(), index = inorder.indexOf(cur)
    let res = new TreeNode(cur), left = inorder.slice(0, index), right = inorder.slice(index + 1)
    res.left = left.length ? buildTree(preorder, left) : null
    res.right = right.length ? buildTree(preorder, right) : null
    return res
};