// 数组 a 是数组 b 的一个 子集 的前提条件是：
// 从 b 删除几个（也可能不删除）元素能够得到 a

// 例如：nums=[5,1,6]，打印所有子集
// - [5] 
// - [1] 
// - [6] 
// - [5,1] 
// - [5,6] 
// - [1,6] 
// - [5,1,6] 

const nums = [5, 1, 6]
var sonNums = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            console.log(nums.slice(i, j))
        }
    }
};
// sonNums(nums)
// 这样按顺序求出来的子集是不完整的，少了[5,6]
// 四种方法：递归，迭代，回溯
var sonNums2 = function (nums) {
    let n = nums.length
    
};
sonNums2(nums)