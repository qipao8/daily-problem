/* 
1027. 最长等差数列
给定一个整数数组 A，返回 A 中最长等差子序列的长度。

回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <= A.length - 1。并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B 是等差的。

示例 1：
输入：[3,6,9,12]
输出：4
解释： 
整个数组是公差为 3 的等差数列。

示例 2：
输入：[9,4,7,2,10]
输出：3
解释：
最长的等差子序列是 [4,7,10]。

示例 3：
输入：[20,1,15,3,10,5,8]
输出：4
解释：
最长的等差子序列是 [20,15,10,5]。
 
提示：
2 <= A.length <= 2000
0 <= A[i] <= 10000
*/

// 直接动规：O(n^3)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestArithSeqLength = function (nums) {
    let len = nums.length
    let dp = new Array(len + 1).fill(2).map(x => new Array(len).fill(2))
    let maxans = 2
    for (let i = 1; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = 0; k < i; k++) {
                if (nums[j] - nums[i] == nums[i] - nums[k]) {
                    dp[i][j] = Math.max(dp[k][i] + 1, dp[i][j])
                }
                if (maxans < dp[i][j]) maxans = dp[i][j]
            }
        }
    }
    return maxans
};

// map集合存储构成等差的前面的值，由于map.has()时间复杂度为O(1)
// so O(n^2)
var longestArithSeqLength = function (nums) {
    const len = nums.length;
    const map = new Map();
    const dp = new Array(len * len).fill(2);
    // 设置长度为len^2的一维dp,比设置长度为len的二维dp要节省内存空间
    let result = 0;
    for (let i = 0; i < len; i++) {//倒数第二个值
        for (let j = i + 1; j < len; j++) {//倒数第一个值
            let target = 2 * nums[i] - nums[j];//构成等差的前面的值
            if (map.has(target)) {
                dp[i * len + j] = dp[map.get(target) * len + i] + 1;
            }
            result = Math.max(result, dp[i * len + j]);
        }
        map.set(nums[i], i);
    }
    return result;
};
