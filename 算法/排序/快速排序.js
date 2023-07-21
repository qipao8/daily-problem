let fs = require('fs')
let arr = JSON.parse(fs.readFileSync('./test.txt').toString())
var Quicksort = function (nums) {
    if (nums.length <= 1) return nums
    // （先比较再划分）
    let mid = nums.length >> 1, left = [], right = [], midvalue = nums.splice(mid, 1)//注意取中间值要使用splice
    for (let i = 0; i < nums.length; i++) {
        nums[i] < midvalue ? left.push(nums[i]) : right.push(nums[i])
    }
    return Quicksort(left).concat([midvalue], Quicksort(right))
};
console.time('用时')
console.log(Quicksort(arr).length)
console.timeEnd('用时')
// 50000条数据用时：192ms