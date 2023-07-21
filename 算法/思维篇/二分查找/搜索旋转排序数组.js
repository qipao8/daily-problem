/*
33. 搜索旋转排序数组
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

 
示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1
 
提示：

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
nums 中的每个值都 独一无二
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-10^4 <= target <= 10^4

进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
*/
const nums = [4, 5, 6, 7, 0, 1, 2], target = 3

// 只要是有序就可以考虑使用二分查找，思路简单，细节魔鬼。
var search = function (nums, target) {
    let left = 0, right = nums.length
    while (left < right) {
        let mid = (right + left) >> 1
        if (nums[mid] == target) return mid
        if (nums[left] == target) return left
        if (nums[right] == target) return right
        // 不慌，从这里开始，屠魔！
        // 先看看我们有啥，nums[mid],target,left,right,旋转数组,魔鬼的关键要害就是旋转点和分割点。那么就从旋转点开始分析。
        // 旋转数组左部分为升序，右部分也为升序，但左部分每一个元素都比右部分大！左边最小元素为nums[left],右边最大元素为nums[right],其中nums[left]<nums[right],除了这些也没啥了
        /*
        加入mid,分析。nums[mid]分割后会出现3种情况：
        1.左边是升序，右边是子旋转数组
        2.左边是升序，右边也是(就代表着mid就是旋转点，但是旋转点也跟着旋转，所以不存在这样一个元素，不必考虑)
        3.左边是子旋转数组，右边是升序
        不管是哪种情况，都是左大右小
        */
        if (nums[left] < nums[mid]) {
            // 如果左侧为升序，target还比nums[mid]大，那么右侧必定为子旋转数组
            if (nums[mid] < target) {
                // 情况一出现
                left = mid + 1
            } else {
                if (nums[right] < target) {
                    right = mid
                } else {
                    left = mid + 1
                }
            }
        } else {
            // 这里的nums[mid]<nums[left],说明左侧为子旋转数组
            if (nums[mid] < target) {
                // 左侧也有比nums[mid]大的值，右侧也是，需要进一步判断
                if (nums[right] < target) {
                    // 如果目标值比最右侧的值都大，那一定在左边
                    right = mid
                } else {
                    left = mid + 1
                }
            } else {
                // nums[left]>nums[mid]>target
                right = mid
            }
        }
    }
    return -1
};//事实证明，上述情况还是没有考虑周全

var search1 = function (nums, target) {
    let l = 0, r = nums.length
    while (l < r) {
        const d = (l + r) >> 1
        if (nums[d] == target) return d
        if (nums[l] == target) return l
        if (nums[d] > nums[l]) {
            if (nums[d] > target && target >= nums[l]) r = d
            else l = d + 1
        } else {
            if(nums[r-1]==target) return r-1
            if (nums[d] > target || target >= nums[r - 1]) r = d
            else l = d + 1
        }
    }
    return -1
};//试了8次错才过

var search2 = function (nums, target) {
    let n = nums.length;
    if (n == 0) {
        return -1;
    }
    if (n == 1) {
        return nums[0] == target ? 0 : -1;
    }
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};//别人的算法一遍过

console.log(search1(nums, target))