// 523. 连续的子数组和
// 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

// 子数组大小 至少为 2 ，且
// 子数组元素总和为 k 的倍数。
// 如果存在，返回 true ；否则，返回 false 。

// 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。


// 示例 1：

// 输入：nums = [23,2,4,6,7], k = 6
// 输出：true
// 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
// 示例 2：

// 输入：nums = [23,2,6,4,7], k = 6
// 输出：true
// 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
// 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
// 示例 3：

// 输入：nums = [23,2,6,4,7], k = 13
// 输出：false


// 提示：

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109
// 0 <= sum(nums[i]) <= 231 - 1
// 1 <= k <= 231 - 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 前缀和+滑动窗口,时间超限！！
var checkSubarraySum = function (nums, k) {
    let Sum = new Array(nums.length + 1).fill(0)
    Sum.forEach((v, i) => i && (Sum[i] = Sum[i - 1] + nums[i - 1]))
    for (let left = 0; left < nums.length; left++) {
        let right = left + 2
        while (right <= nums.length) {
            if (Sum[right] - Sum[left] == 0 || (Sum[right] - Sum[left]) % k == 0) {
                return true
            }
            right++
        }
    }
    return false
};

// 哈希优化
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function (nums, k) {
    const map = new Map();
    map.set(0, -1);
    let remainder = 0;
    for (let i = 0; i < nums.length; i++) {
        remainder = (remainder + nums[i]) % k;
        if (map.has(remainder)) {
            const prevIndex = map.get(remainder);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }
    return false;
}