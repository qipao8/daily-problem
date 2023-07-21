process.stdout.write('请输入字符串：\n')
process.stdin.on('data',input=>{
    let str=input.toString().trim()
    let count=0
    for(let i=0;i<str.length;i++)
    for(let j=i+1;j<=str.length;j++){
        //获取子串
        let son=str.substring(i,j)
        let soncount=str.match(new RegExp(son,'g')).length
        console.log('子串：'+son+'，出现次数为：'+soncount)
        count++
    }
    // str.lenght==(count+1)*count/2
    console.log('字符串长度为：'+str.length+'总子串数为：'+count)
    if(str=='') process.exit()
    process.stdout.write('\n请输入字符串：\n')
})