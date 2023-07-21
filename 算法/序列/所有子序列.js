process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    

})
