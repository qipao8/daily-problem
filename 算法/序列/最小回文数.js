// 求大于等于n的最小回文数
process.stdin.on('data', input => {
    let s = input.toString().trim()
    if (s == '') process.exit()
    let len = s.length, num, numin = Number(s), flag = 1

    while (flag) {
        let d = (len + 1) / 2 >> 0
        let k = [0, 1, 3, 7, 9]
        for (let j = 0; j < k.length; j++) {
            let arr = new Array(len).fill(k[j])
            let str
            if (len % 2 != 0) {
                // 奇数
                for (let i = 0; i < 10; i++) {
                    arr[d - 1] = i
                    str = arr.join('')
                    str = str.slice(0, d) + str.slice(0, d - 1).split('').reverse().join('')
                    console.log(str)
                    num = Number(str)
                    if (num >= numin) {
                        console.log(num)
                        flag = 0
                        break
                    }
                }
            }
            else {
                // 偶数
                for (let i = 0; i < 10; i++) {
                    arr[d - 1] = i
                    str = arr.join('')
                    str = str.slice(0, d) + str.slice(0, d).split('').reverse().join('')
                    num = Number(str)
                    if (num >= numin) {
                        console.log(num)
                        flag = 0
                        break
                    }
                }
            }
            if (!flag) break
        }
        len++
    }
})