process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    str==str.split('').reverse().join('')?console.log(str.length):console.log("-1")
})