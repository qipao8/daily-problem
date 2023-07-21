process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    if (str.split('').reverse().join('') == str)
        console.log('yes')
    else console.log('no')
})

function isSS(n) {
    if(n==1) return 0
    let numnew = Math.sqrt(n)
    let k = numnew >> 0
    while (1) {
        if (k == 1 || k == 0) return 1
        else if (n % k != 0) k--
        else return 0
    }
}