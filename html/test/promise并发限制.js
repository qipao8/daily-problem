// 例：100个请求，最大并发数为20，第n个请求所需时间n秒，观察最后所需时间

let urls = new Array(100).fill(1000).map((v,i)=>v+=i*1000).map(current => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('该请求所需时间' + current + 'ms')
        }, current)
    })
})

let func = (urls, maxNum) => {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;
    return new Promise((resolve, reject) => {
        // 请求maxNum个
        while (count < maxNum)
            next();
        function next() {
            let current = count++;
            // 处理边界条件
            if (current >= len) {
                // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
                !result.includes(false) && resolve(result);
                return;
            }
            const url = urls[current]
            console.log(`开始 请求${current + 1}`);
            url.then((k) => {
                // 保存请求结果
                result[current] = '请求' + (current + 1)
                console.log(`完成 请求${current + 1}`, k);
                // 请求没有全部完成, 就递归
                if (current < len) {
                    next();
                }
            })
        }
    })
}
func(urls, 50).then(result => console.log(result))
