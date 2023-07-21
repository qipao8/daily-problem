/*
658. 找到 K 个最接近的元素
给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b
 

示例 1：

输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]
示例 2：

输入：arr = [1,2,3,4,5], k = 4, x = -1
输出：[1,2,3,4]
 

提示：

1 <= k <= arr.length
1 <= arr.length <= 104
数组里的每个元素与 x 的绝对值不超过 104

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function (arr, k, x) {
    let l = 0, r = arr.length
    if (r == k) return arr
    while (l < r) {
        let d = (l + r) >> 1
        if (arr[d] == x) {
            l = d
            r = d + 1
            while (--k) {
                if (r == arr.length) l--
                if (l == 0) r++
                if(r!=arr.length&&l!=0)
                if (x - arr[l - 1] < arr[r] - x || x - arr[l - 1] == arr[r] - x) {
                    l--
                } else r++
            }
            return arr.slice(l, r)
        }
        if (arr[d] > x) r = d
        else l = d + 1
    }
    if (r == 0) return arr.slice(0, k)
    if (l == arr.length) return arr.slice(-k)
    if (r == l) {
        while (k--) {
            if (r == arr.length) l--
            if (l == 0) r++
            if(r!=arr.length&&l!=0)
            if (x - arr[l - 1] < arr[r] - x || x - arr[l - 1] == arr[r] - x) {
                l--
            } else r++
        }
        return arr.slice(l, r)
    }
};