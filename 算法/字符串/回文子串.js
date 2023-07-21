// 输出所有回文子串
process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()

    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            let arrson = arr.slice(i, j)
            console.log(arrson)
            let Yarr=[...arrson]
            arrson.reverse()
            let flag=1
            arrson.forEach((v,i)=>{
                if(!(v==Yarr[i])) flag=0
            })
            flag?console.log("ok"):console.log('no')
        }
    }
    // 回文判断(数组法)
    // let Yarr=[...arr]
    // arr.reverse()
    // let flag=1
    // arr.forEach((v,i)=>{
    //     if(!(v==Yarr[i])) flag=0
    // })
    // flag?console.log("ok"):console.log('no')
    
    Yarr = null
    arr = null
})