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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [], stack = [root], arr = [], brr = []
    if (!root) return res
    while (stack.length) {
        stack.forEach(v => {
            brr.push(v.val)
            v.left && arr.push(v.left)
            v.right && arr.push(v.right)
        })
        stack = arr
        arr = []
        res.push(brr)
        brr = []
    }
    return res
};

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let res = [], q = []
    q.push(root)
    while (q.length) {
        let cursize = q.length
        res.push([])
        for (let i = 1; i <= cursize; i++) {
            let node = q.shift()
            res[res.length - 1].push(node.val)
            node.left && q.push(node.left)
            node.right && q.push(node.right)
        }
    }
    return res
};

// BFS模板
var levelOrder = function (root) {
    // 初始入队
    const queue = [root]
    while (queue.length) {
        // 如需保存每一层添加循环遍历该层
        // 注意要将queue.length用变量保存，因为会变
        // let cursize = q.length
        // for(let i = 0; i < cursize; i++)
        // 出队探索
        const p = queue.shift()
        // 在后面添加
        p.left && queue.push(p.left)
        p.right && queue.push(p.right)
    }
}

// DFS解法
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    let res = []
    let dfs = (path) => {
        if (!path.length) return
        res.push([])
        const cursize = path.length
        for (let i = 0; i < cursize; i++) {
            let cur = path.shift()
            res[res.length - 1].push(cur.val)
            cur.left && path.push(cur.left)
            cur.right && path.push(cur.right)
        }
        dfs(path)
    }
    root && dfs([root])
    return res
};