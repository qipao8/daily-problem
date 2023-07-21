// Promise.reject()与Promise.prototype.then()

// Promise.reject()会实例化一个拒绝期约并抛出一个异步错误（这个错误不能通过try/catch捕获，而只能通过拒绝处理程序捕获）

// new Promise((resolve,reject)=>reject())与Promise.reject()相等

/*
let p=Promise.reject(3)//3就是拒绝理由
setTimeout(console.log,0,p)
//then()方法中第一个参数是onResolved()解决函数，第二个参数是onRejected()拒绝函数
p.then(null,(e)=>setTimeout(console.log,0,e))
*/

/*
let p1 = Promise.reject(new Error('bar'))
try{
    throw new Error('foo')
}catch(e){
    console.log(e)
}
try{
    //try/catch无法通过异步模式捕获错误
    p1
}catch(e){
    console.log("reject错误：",e)
}
// 如果没有then中的错误函数，那么就会报错（无法处理Error:barr）
p1.then(null,(e)=>setTimeout(console.log,0,"拒绝理由：",e))
*/

// Promise.prototype.then()返回一个新的期约实例
let p2=new Promise(()=>{}).then()
// then()方法能创建新期约是由于Promise.resolve()包装onResolved的返回值构建的，如果没有onResolved那么Promise.resolve()包装上一个期约状态改变结束后的值，如果还没有值那么包装默认值undefined,此时状态为pending待定
//Promise { <pending> }
// console.log(p2)

let p3=Promise.reject(new Error('报错啦')).then(null,e=>setTimeout(console.log,0,"拒绝理由：",e))
console.log(p3)//Promise { <pending> },同时触发onReject

let p1=Promise.resolve('foo')