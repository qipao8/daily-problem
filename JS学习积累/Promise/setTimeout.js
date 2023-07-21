// setTimeout(func,time,funcargs)
// 第一个参数是一个函数func,第二个参数是时间time,第三个参数是第一个参数func的参数

const args=[1,2,3,4]
setTimeout((...params)=>console.log(args,params),0,...args)
//[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ],args和params引用的地址不同，但值相同