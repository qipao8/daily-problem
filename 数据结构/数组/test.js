var minSubArrayLen = function (target, nums) {
    let l = 0, n = nums.length, res = n, cur = 0
    debugger
    for (let r = 0; r < n; r++) {
        cur += nums[r]
        while (l < r) {
            if (cur > target) cur -= nums[l++]
            if (cur === target) res = Math.min(res, r - l + 1)
        }
    }
    return res
};
minSubArrayLen(4, [2, 3, 1, 2, 4, 3])