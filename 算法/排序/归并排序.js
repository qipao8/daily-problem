function mergeSort(nums) { // 采用自上而下的递归方法
    // 分治法之归并排序（先划分再比较）
    if (nums.length <= 1) return nums
    const mid = nums.length >> 1
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}

function merge(left, right) {
    let res = []
    while (left.length && right.length)
        left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift())
    while (left.length)
        res.push(left.shift())
    while (right.length)
        res.push(right.shift())
    return res
}

let fs = require('fs')
let arr = JSON.parse(fs.readFileSync('./test.txt').toString())

console.time('用时')
console.log(mergeSort(arr));
console.timeEnd('用时')
// 50000条数据用时：136ms
