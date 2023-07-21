// 1044. 最长重复子串
// 给你一个字符串 s ，考虑其所有 重复子串 ：即 s 的（连续）子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。

// 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。

// 示例 1：
// 输入：s = "banana"
// 输出："ana"

// 示例 2：
// 输入：s = "abcd"
// 输出：""

// 提示：
// 2 <= s.length <= 3 * 104
// s 由小写英文字母组成

var fun = function (s) {
    let win = ''//窗口
    let right = 1//右边框
    // debugger
    let n = s.length
    for (let left = 0; left < n; left++) {
        // 如果左右合并则右加一
        if (left == right) {
            right++
        }
        let sy = s.slice(left + 1)// 剩余的字符串
        let cur = s.slice(left, right)//当前字符串
        // 右边框滑动寻找符合的最长字符串，找到后记录窗口
        while (right < n && sy.includes(cur)) {
            win.length < cur.length && (win = cur)
            right++
            cur = s.slice(left, right)
        }
    }
    return win
};
console.log(fun("banana"))