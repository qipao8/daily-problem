// 862. 和至少为 K 的最短子数组
// 给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。如果不存在这样的 子数组 ，返回 -1 。

// 子数组 是数组中 连续 的一部分。

// 示例 1：
// 输入：nums = [1], k = 1
// 输出：1

// 示例 2：
// 输入：nums = [1,2], k = 4
// 输出：-1

// 示例 3：
// 输入：nums = [2,-1,2], k = 3
// 输出：3

// 提示：
// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105
// 1 <= k <= 109

// 代码没有错，可是时间超限了！！！
var shortestSubarray = function (nums, k) {
    let win = [], right = 0
    debugger
    for (let left = 0; left < nums.length; left++) {
        if (left !== 0) right = left
        let sum = 0, cur = []
        while (right < nums.length && sum < k) {
            sum += nums[right]
            cur.push(nums[right])
            right++
        }
        cur.length !== 0 && sum >= k && win.push(cur.length)
    }
    return win.length == 0 ? -1 : Math.min(...win)
};
console.log(shortestSubarray([2, -1, 2, 3, 4, 3], 20))

// 优化后还是慢
// var shortestSubarray = function (nums, k) {
//     let res = -1, right = 0
//     for (let left = 0; left < nums.length; left++) {
//         while(nums[left]<0) left++
//         if (left !== 0) right = left
//         let sum = 0
//         while (right < nums.length && sum < k) {
//             sum += nums[right]
//             right++
//             if(right-left==res) right=nums.length
//         }
//         let len = right-left
//         len !== 0 && sum >= k && (res = res == -1 ? len : Math.min(len, res))
//     }
//     return res
// };

// 前缀和+单调队列

// 怎么构建单调队列，很明显，单调性以及遍历想到，左边界下标就是递增的。于是单调队列维护左边界下标left
// 而右边界相对于前缀和，自然是前缀和数组的下标right
// 开始遍历right时，左边界下标left=0入队，当区间[0,right]满足条件,即Sum[right]>=k。