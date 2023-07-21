/*
400. 第 N 位数字
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 位数字。
注意：n 是正数且在 32 位整数范围内（n < 231）。

示例 1：
输入：3
输出：3

示例 2：
输入：11
输出：0

解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
*/
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let row = 2, x = 9
    if (n - 9 <= 0) return n
    while (n - x > 0) {
        x += count(row)
        row++
    }
    let k = row - 1
    x=n-(x-count(k))
    if (x % k) {
        let num = Math.pow(10, k - 1) + Math.floor(x / k)//求出所在数
        return Number((num + '').substr(x % k - 1, 1))
    } else {
        let num = Math.pow(10, k - 1) + x / k - 1//求出所在数
        return Number((num + '').substr(-1, 1))
    }
};

var count = (row) => {
    if (row == 1) return 9
    else {
        return row * 9 * Math.pow(10, row - 1)
    }
}