/*
300. 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列(多个答案取字典序最小那个)。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 
示例 1：
输入：nums = [10,9,2,5,3,7,101,18]
输出：4

示例 2：
输入：nums = [0,1,0,3,2,3]
输出：4

示例 3：
输入：nums = [7,7,7,7,7,7,7]
输出：1

提示：
0 <= nums.length <= 200000
1 <= nums[i] <= 10^9
 
时间复杂度为 O(n log(n))

*/
function LIS(arr) {
  let dp = [arr[0]],
    len = [1],
    res = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > dp[dp.length - 1]) {
      dp.push(arr[i]);
      len.push(dp.length);
    } else {
      let left = 0,
        right = dp.length - 1;
      while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (dp[mid] >= arr[i]) right = mid - 1;
        else left = mid + 1;
      }
      dp[left] = arr[i];
      len.push(left + 1);
    }
  }
  for (let i = len.length - 1, j = dp.length; j > 0; i--) {
    if (len[i] === j) {
      j--;
      res[j] = arr[i];
    }
  }
  return res;
}
console.log(LIS([2, 1, 5, 3, 6, 4, 8, 9, 7]));
