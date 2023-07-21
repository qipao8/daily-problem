process.stdin.on('data',input=>{
    let s=input.toString().trim()
    if(s=='') process.exit()
    let arr=s.split('')
    const len=arr.length
    let flag=1
    for(let i=0;i<len/2;i++){
        if(arr[i]!=arr[len-1-i]){
            flag=0
            break
        }
    }
    flag?console.log('yes'):console.log('no')
})