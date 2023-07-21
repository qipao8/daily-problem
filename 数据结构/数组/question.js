// 446. 等差数列划分 II - 子序列
// 给你一个整数数组 nums ，返回 nums 中所有 等差子序列 的数目。

// 如果一个序列中 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该序列为等差序列。

// 例如，[1, 3, 5, 7, 9]、[7, 7, 7, 7] 和 [3, -1, -5, -9] 都是等差序列。
// 再例如，[1, 1, 2, 5, 7] 不是等差序列。
// 数组中的子序列是从数组中删除一些元素（也可能不删除）得到的一个序列。

// 例如，[2,5,10] 是 [1,2,1,2,4,1,5,10] 的一个子序列。
// 题目数据保证答案是一个 32-bit 整数。

 
// 示例 1：

// 输入：nums = [2,4,6,8,10]
// 输出：7
// 解释：所有的等差子序列为：
// [2,4,6]
// [4,6,8]
// [6,8,10]
// [2,4,6,8]
// [4,6,8,10]
// [2,4,6,8,10]
// [2,6,10]
// 示例 2：

// 输入：nums = [7,7,7,7,7]
// 输出：16
// 解释：数组中的任意子序列都是等差子序列。
 

// 提示：

// 1  <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1

// 内存超限的答案：
/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function (nums) {
    let count = 0
    let len = nums.length
    if (len <= 2) return 0
    else {
        if (len == 3) {
            return nums[0] + nums[2] == 2 * nums[1] ? 1 : 0
        } else {
            for (let i = 3; i <= len; i++) {
                let obj = new Set(cmn(nums, i))
                // console.log(obj)
                for (let i of obj) {
                    if (ifdc(i)) count++
                }
                obj=null
            }
            obj=null
            len=0
            nums=null
            return count
        }
    }
};
//2.判断数组和子数组是否为等差数列
//公差d,通项公式An=a1+d*n
var ifdc = (nums) => {
    let d = nums[1] - nums[0]
    let flag = 1
    for (let i = 2; i < nums.length; i++) {
        let An = nums[0] + d * i
        if (An != nums[i]) {
            flag = 0
            break
        }
    }
    return flag
}
// 3.数学中的随机组合
function cmn(m, n, currentIndex = 0, choseArr = [], result = []) {
    let mLen = m.length
    // 可选数量小于项所需元素的个数，则递归终止
    if (currentIndex + n > mLen) {
        return
    }
    for (let i = currentIndex; i < mLen; i++) {
        // n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
        // debugger
        if (n === 1) {
            // 再增加一个元素就能生成一个完整项，再加入到结果集合中
            result.push([...choseArr, m[i]])
            // 继续下一个元素生成一个新的完整项
            i + 1 < mLen && cmn(m, n, i + 1, choseArr, result)
            break
        }
        // 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
        cmn(m, n - 1, i + 1, [...choseArr, m[i]], result)
    }
    return result
}