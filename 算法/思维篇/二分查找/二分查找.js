//简单的思路，魔鬼的细节
// 二分查找设计很多边界条件，对于区间的定义一定要明确。
// 二分查找的前提是可以比较大小来缩小计算范围,换句话说,有序才二分！
// 解题步骤：先找区间，再定边界

// 例题一：给定一个升......序整型数组nums,搜索目标值target的下标。
// 相当于array.indexOf
Array.prototype.search = function (target) {
    let left = 0, right = this.length
    // 区间是[0,array.length)
    while (left < right) {
        const middle = (right + left) >> 1
        if (this[middle] === target) return middle
        else
            this[middle] > target ? right = middle : left = middle + 1
    }
    return -1
    // 此时的left，即target应该处在的位置
}

const arr = [1, 3, 5, 7, 9, 12]
console.log(arr.search(2))

// 例题二：求一个非负数x的平方根，结果只保留整数部分

var mySqrt = function (x) {
    if (!x) return 0
    if (x <= 3) return 1
    let right = x, left = 0
    while (right) {
        const mid = (left + right) >> 1
        if (mid * mid <= x) {
            if ((mid + 1) * (mid + 1) > x)
                return mid
            else left = mid
        }
        else right = mid
    }
}
console.log(mySqrt(1183562654))//34402