function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let ArrToTree = (arr, root) => {
    let path = []
    while (arr.length || path.length) {
        if (!arr.length) return root
        if (!root) {
            root = new TreeNode(arr.shift())
            path.push(root)
        } else {
            let root = path.shift()
            if (root) {
                let left = arr.shift()
                root.left = left !== null && left !== undefined ? new TreeNode(left) : null
                path.push(root.left)
                let right = arr.shift()
                root.right = right !== null && right !== undefined ? new TreeNode(right) : null
                path.push(root.right)
            }
        }
    }
}
let root = ArrToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], null)
console.log(root)
// var sumRootToLeaf = function (root) {
//     let dfs = (root, val) => {
//         if (!root) return 0
//         val = (val << 1) | root.val;
//         if (!root.left && !root.right) {
//             return val;
//         }
//         return dfs(root.left, val) + dfs(root.right, val);
//     }
//     return dfs(root, 0)
// };
// console.log(sumRootToLeaf(root))

var pathSum = function (root, targetSum) {
    let res = [], path = []
    debugger
    let dfs = (root, sum) => {
        if (!root) return;
        path.push(root.val)
        sum -= root.val
        if (!root.left && !root.right && !sum) {
            res.push(path)
        }
        dfs(root.left, sum)
        dfs(root.right, sum)
        path.pop()
    }
    dfs(root, targetSum)
    return res
};
console.log(pathSum(root, 22))