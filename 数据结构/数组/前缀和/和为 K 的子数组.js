// 560. 和为 K 的子数组
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2

// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

// 提示：
// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和+滑动窗口，超出时间限制
 var subarraySum = function (nums, k) {
    let Sum = new Array(nums.length + 1).fill(0)
    Sum.forEach((v, i) => i && (Sum[i] = Sum[i - 1] + nums[i - 1]))
    let res = 0, right = 0
    for (let left = 0; left < nums.length; left++) {
        right = left + 1
        while (right <= nums.length) {
            Sum[right] - Sum[left] == k && res++
            right++
        }
    }
    return res
};

// 哈希表巧妙化和为差
var subarraySum = function (nums, k) {
    // 以差为键，以个数为值
    let mp=new Map()
    mp.set(0,1)
    let [sum,count]=[0,0]
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(mp.has(sum-k)){
            count+=mp.get(sum-k)
        }
        if(mp.has(sum)){
            mp.set(sum,mp.get(sum)+1)
        }else mp.set(sum,1)
    }
    return count
};