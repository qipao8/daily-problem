process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    let arr=str.substr(0,2).split('').reverse()
    let i=0
    str=str.replace(str.substr(0,2),arr.join(''))
    console.log(str)
})