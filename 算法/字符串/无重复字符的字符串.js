process.stdin.on('data',input=>{
    let str=input.toString().trim()
    //获取字符串中的不重复字符，使用Set()集合
    let set=new Set(str)
    let flag=true
    for(let item of set){
        if(str.match(new RegExp(item,'g')).length!=1)
        flag=false
    }
    if(flag) console.log('是无重复字符串')
    else console.log('不是无重复字符串')
})