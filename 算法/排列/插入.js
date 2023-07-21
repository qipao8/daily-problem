//一个数组插入一个元素v组成新数组，返回所有可能的新数组
//插入首尾分别为：unshift(v)和push(v)
//插入中间呢？splice(index,0,v)

let arr = [1, 2]

add = (arr, v) => {
    let n = []
    const len = arr.length
    for (let i = 0; i <= len; i++) {
        arr.splice(i, 0, v)
        n.push([...arr])
        arr.splice(i, 1)
    }
    return n
}

// console.log(add(arr,3))

// 如果是一个二维数组呢？
let arr2=[[]]
let add2=(arr,v)=>{
    let n=[]
    for(let i=0;i<arr.length;i++){
        n=n.concat(add(arr[i],v))
    }
    return n
}

console.log(add2(arr2,1))