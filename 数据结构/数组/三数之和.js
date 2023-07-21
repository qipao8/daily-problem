// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

const nums = [-1, 0, 1, 2, -1, -4]

// 本人的暴力解法
let threeSum1 = nums => {
    let arr = [], res = [], newarr = []
    set = new Set(nums)
    // 去重：如果给定数组中某个元素出现次数超过3次，则去掉后面重复的该元素。
    for (let item of set) {
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            if (item == nums[i]) {
                count++
                if (count <= 3) newarr.push(nums[i])
            }
        }
    }
    nums = [...newarr]
    // 排序：为了后面去重准备
    nums = nums.sort((a, b) => a - b)
    // 三重循环找出符合的三元组
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0)
                    arr.push([nums[i], nums[j], nums[k]])
            }
        }
    }
    // 去重：去掉重复的三元组。
    arr.forEach(v => {
        res.push(v.join(' '))
    })
    res = [...new Set(res)]
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].split(' ').map(v => v = Number(v))
    }
    return res
}

let threeSum2 = nums => {

}

let threeSum = threeSum1

console.log(threeSum(nums)) //[[-1,-1,2],[-1,0,1]]