process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    arr=str.split('')
    arr.forEach(v=>{
        if(str.split(v).length==2){
            let val=new RegExp(v,"g")
            str=str.replace(val,'')
        }
    })
    console.log(str)
})