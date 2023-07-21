//重复走访要排序的数列，一次比较相邻的两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
let fs = require('fs')
let arr = JSON.parse(fs.readFileSync('./test.txt').toString())

let maopao = nums => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            nums[j - 1] > nums[j] && ([nums[j - 1], nums[j]] = [nums[j], nums[j - 1]])
        }
    }
    return nums
}
// console.time()
// console.log(maopao(arr).length)
// console.timeEnd()
// 50000条数据用时：3.445s

// 随着排序进行，数组后面会有已经排序完毕的数组，可以将遍历终点(end)提前。

let maopao1 = nums => {
    let i = nums.length
    while (i > 0) {
        let end = 0
        for (let j = 1; j < i; j++) {
            nums[j] < nums[j - 1] && ([nums[j - 1], nums[j]] = [nums[j], nums[j - 1]])
            end = j//记录终点
        }
        i = end//终点提前
    }
    return nums
}
// console.time()
// console.log(maopao1(arr))
// console.timeEnd()
// 50000条数据用时：2.472s

// 终点提前的同时，for遍历一次，起点也可以提前！（双指针）
let maopao2 = nums => {
    let start = 0, end = nums.length
    while (start < end) {
        for (let i = start; i < end; i++) {
            nums[i - 1] > nums[i] && ([nums[i - 1], nums[i]] = [nums[i], nums[i - 1]])
        }
        end--
        for (let j = end; j > start; j--) {
            nums[j] < nums[j - 1] && ([nums[j - 1], nums[j]] = [nums[j], nums[j - 1]])
        }
        start++
    }
    return nums
}
console.time('用时')
console.log(maopao2(arr).length)
console.timeEnd('用时')
// 50000条数据用时：2.429s