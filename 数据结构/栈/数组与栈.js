let arr = new Array(10).fill(0).map(v=>v=Math.floor(Math.random()*10))

console.log(arr)

let stack=[]

arr.forEach(v=>{
    stack.push(v)
})
arr.forEach(v=>console.log(stack.pop()))
console.log(stack)

// “先进后出”，stack即为栈