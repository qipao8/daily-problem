// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

// 注意隐藏条件：nums[-1]=nums[n]=-∞ 那么如果nums[i]<nums[i+1],i后面必有一个峰值！

let f = (nums) => {
    // 二分查找，于是先找出数组的中心下标i=nums.length/2>>0
    i=nums.length/2>>0
    if(nums[i-1]<nums[i]&&nums[i]>nums[i+1]){
        return i
    }
    if(nums[i-1]<nums[i]){
        nums=nums.slice(i)
        f(nums)
    }else{
        nums=nums.slice(0,i)
        f(nums)
    }
}
console.log(f([1,2,1,3,5,6,4]))