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
 var postorderTraversal = function(root) {
    let res=[]
    let end=root=>{
        if(!root) return ;
        end(root.left)
        end(root.right)
        res.push(root.val)
    }
    end(root)
    return res
};

// 迭代
var postorderTraversal = function(root, res = []) {
    if (!root) return res;
    const stack = [];
    while(root||stack.length){
        res.push(root.val)
        root.left&&stack.push(root.left)
        root.right&&stack.push(root.right)
        root=stack.pop()
    }
    return res.reverse()
};