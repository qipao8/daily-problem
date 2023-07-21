// 219. 存在重复元素 II
// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

// 示例 1：
// 输入：nums = [1,2,3,1], k = 3
// 输出：true

// 示例 2：
// 输入：nums = [1,0,1,1], k = 1
// 输出：true

// 示例 3：
// 输入：nums = [1,2,3,1,2,3], k = 2
// 输出：false

// 提示：
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    //  用集合存储窗口
    const set = new Set();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        // 3.窗口到达最大长度k，超出的元素出队
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        // 2.下一个元素是否在之前的窗口内
        if (set.has(nums[i])) {
            return true;
        }
        // 1.元素进入窗口
        set.add(nums[i])
    }
    return false;
}
// 哈希表法
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k)
            return true
        map.set(nums[i], i)
    }
    return false
};