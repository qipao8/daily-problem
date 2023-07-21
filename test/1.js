var canPartitionKSubsets = function (nums, k) {
    const dfs = (s, p) => {
        if (s === 0) {
            return true;
        }
        if (!dp[s]) {
            return dp[s];
        }
        dp[s] = false;
        for (let i = n - 1; i >= 0; i--) {
            if (nums[i] + p > per) {
                break;
            }
            if (((s >> i) & 1) != 0) {
                if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
                    return true;
                }
            }
        }
        return false;
    };
    const all = nums.reduce((prev, v) => prev += v, 0);
    if (all % k !== 0) {
        return false;
    }
    per = all / k;
    nums.sort((a, b) => b - a);
    n = nums.length;
    if (nums[0] > per) {
        return false;
    }
    dp = new Array(1 << n).fill(true);
    return dfs((1 << n) - 1, 0);
}
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))