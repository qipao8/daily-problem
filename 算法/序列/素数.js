// 判断是否为素数
// function isSS() {
//     process.stdin.on('data', input => {
//         let str = input.toString().trim()
//         if (str == '') process.exit()
//         const num = Number(str)
//         const numnew = Math.sqrt(Number(str))
//         let k = numnew >> 0
//         while (1) {
//             if (k == 1 || k == 0) {
//                 console.log(num, '为素数')
//                 break
//             } else
//                 if (num % k != 0) k--
//                 else {
//                     console.log(num, '不是素数')
//                     break
//                 }
//         }
//     })
// }
// isSS()

function isSS(n) {
    if (n == 1) return 0
    let numnew = Math.sqrt(n)
    let k = numnew >> 0
    while (1) {
        if (k == 1 || k == 0) return 1
        else if (n % k != 0) k--
        else return 0
    }
}

// 找出
function SSarr(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        if (isSS(i))
            arr.push(i)
    }
    return arr
}
console.log(SSarr(Math.pow(10,5),Math.pow(10,6)).length)