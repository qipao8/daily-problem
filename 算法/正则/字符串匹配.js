process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    const s=new RegExp('[a,e,i,o,u]','g')
    let arr=str.split('')
    const len=arr.length
    // for(let i=0;i<len;i++)
    // console.log(s.test(arr[i]))
    // arr.reverse()
    console.log(s[1])
})