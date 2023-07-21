/* Promise三状态之resolve */

// Promise有pending/resolve/reject三种状态，开始的状态可以是三种的任意一种
// resolve会返回一个确定的值，reject会给出一个拒绝理由。两者默认为undefined
// 状态的改变只会进行一次，连续修改错误会静默失败（即没有任何反应）

// 首次改变后的状态就是之后的状态
let p1=new Promise((res,rej)=>{res(),rej()})
setTimeout(console.log,0,p1)

// 当超过1s后还未resolve,那么便拒绝
let p2 = new Promise((res, rej) => {
    setTimeout(rej, 1000)
    setTimeout(res, 1500)
})
setTimeout(console.log, 0, p2)
setTimeout(console.log, 1000, p2)

// Promise.resolve()可以将一个值变成期约
let x=3
console.log('x值:',x,' ——> 期约:',Promise.resolve(x))

// 如果Promise.resolve(x),x本身是一个期约，那么Promise.resolve就是一个空包装，因此Promise.resolve()可以说是一个幂等方法。

let y=new Promise(()=>{})//状态pending待定
setTimeout(console.log,0,y===Promise.resolve(y))//状态不会改变

//注意:由于Promise.resolve()可以包装任何非期约值（包装期约值相当于没包装），包括错误对象，那么将错误对象转换成解决状态的期约时，可能会出现不符合预期的行为。
let p3=Promise.resolve(new Error('foo'))
setTimeout(console.log,0,p3)