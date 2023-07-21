// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()//窗口
    let right = 0, len = 0
    // 如果s.length==0那么没必要滑动，则直接返回len即0
    for (let left = 0; left < s.length; left++) {
        // 左边框右移则窗口左边长度减一
        if (!left == 0) set.delete(s[left - 1])
        // 右边框不超过最大窗口长度，且满足不重复条件，则窗口右边长度加一
        while (right < s.length && !set.has(s[right])) {
            set.add(s[right])
            right++
        }
        // 每次左边起点发生变化计算最长长度
        len = Math.max(len, right - left)
    }
    return len
};

console.log(lengthOfLongestSubstring('abcdasd'))