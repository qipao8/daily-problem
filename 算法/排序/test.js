let f=(obj)=>{
    return Object.prototype.toString.call(obj).replace(/\[object |\]/g,'')
}

// console.log(f([]))
// console.log(f(null))
// console.log(f(undefined))
process.stdin.on('data', function (data) {
    let input=data
    console.log(f(input))
})