process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    let arr = str.split(',')
    console.log(numberOfArithmeticSlices(arr))
})

var numberOfArithmeticSlices = function (nums) {
    let count = 0;
    const n = nums.length
    const f = new Map()
    for (let i = 0; i < n; i++) {
        f[i] = new Map()
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const d = nums[i] - nums[j]
            const cnt = f[j].get(d) || 0
            count += cnt
            f[i].set(d, (f[i].get(d) || 0) + cnt + 1)
        }
    }
    return count
};