// 无重复全排列
//两个元素的全排列就是在一个元素的全排列的元素上加上一个元素再进行全排列
//任意个元素的全排列==任意个元素减一个元素后的全排列再插入删减的那个元素即可
var permute = function(nums) {
    let n=[[]]
    for (let i = 0; i < nums.length;i++) {
        n=add2(n,nums[i])
    }
    return n
};

let add = (arr, v) => {
    let n = []
    const len = arr.length
    for (let i = 0; i <= len; i++) {
        arr.splice(i, 0, v)
        n.push([...arr])
        arr.splice(i, 1)
    }
    return n
}

let add2=(arr,v)=>{
    let n=[]
    for(let i=0;i<arr.length;i++){
        n=n.concat(add(arr[i],v))
    }
    return n
}

console.log(permute([1,2,3,4]))