process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()

    let arr=str.split('')
    let max=0
    arr.forEach(v=>{
        let val=str.split(v).length-1
        max=max<=val?val:max
    })
    arr=null
    console.log(max)
})
