/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = async function (n, visualizer) {
    let arr = new Array(n + 1).fill(0),
        max = 0;

    // 初始化绘制
    visualizer.drawArray(arr);

    // 定义一个延迟函数，确保绘制完成
    const delay = (ms) => new Promise(resolve => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(resolve, ms);
            });
        });
    });

    // 逐步更新数组并绘制
    for (let i = 1; i <= n; i++) {
        // 计算当前数字的各位数字之和
        let cur = (i + "").split("").reduce((sum, v) => sum + Number(v), 0);

        // 更新数组
        arr[cur]++;
        max = Math.max(max, arr[cur]);

        // 绘制当前状态，高亮当前更新的值
        if (Array.isArray(arr[0])) {
            visualizer.drawValues(arr, [Math.floor(cur / arr[0].length), cur % arr[0].length]);
        } else {
            visualizer.drawValues(arr, [cur]);
        }

        // 等待绘制完成后再继续
        await delay(1000); // 每次更新间隔1秒
    }

    // 返回结果
    return arr.filter(v => v === max).length;
};
export { countLargestGroup };
