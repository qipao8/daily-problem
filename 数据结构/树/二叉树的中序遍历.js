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

var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);//递归遍历左节点，直到为空
        res.push(root.val);//遍历终点，保存值
        inorder(root.right);//左边最后的那个节点是没有左右节点的，但是递归上一个遍历函数是有的！！！
    }
    inorder(root);
    return res;
};

// 如果左节点存在则，先遍历左节点。一直循环下去，直到左节点为空。再保存值然后，遍历该最左节点的根节点。
// 那么问题来了，一直遍历到最左节点，怎么返回遍历之前的节点。
// 如果使用之前先序遍历栈的方式，那么要不断存储节点，再通过出栈并且还需要进行左节点删除的剪枝操作。太过繁琐。
// 要想回退，就用递归！
// 递归的核心就是不断使用同样的方法去调用，这使得那些有多层次多包涵多子节点的对象都能够享受到递归操作。
// 简而言之，子之终，父之始。

var inorderTraversal = function(root) {
    let res=[],stack=[]
    while(root||stack.length){
        // 循环将左节点压入栈
        while(root){
            stack.push(root)
            root=root.left
        }
        // 出栈同时重新获取当前节点
        root=stack.pop()
        res.push(root.val)
        root=root.right
    }
    return res
};

// 循环迭代的关键在于怎么从最末端子节点迭代回到上一个父节点
// 出栈操作可以解决这个问题，但要注意遍历父节点的右节点。

// Morris中序遍历
 var inorderTraversal = function(root) {
    const res=[]
    let predecessor=null
    while(root){
        if(root.left){
            // 2.找到predecessor：左子节点最后一个
            predecessor=root.left
            while(predecessor.right&&predecessor.right!==root){
                predecessor=predecessor.right
            }
            if(!predecessor.right){
                // 3.连接根节点
                predecessor.right=root
                root=root.left
            }else{
                // 4.predecessor.right===root时将root加入res然后往右走
                res.push(root.val)
                root=root.right
                // 5.最后优化,predecessor.right置空,让原本的树保持结构不变
                predecessor.right=null
            }
        }else{
            // 1.当左子树遍历完往右走
            res.push(root.val)
            root=root.right
        }
    }
    return res
};