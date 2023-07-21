arr=[1,3,5,9,2,7,6,4,8,2]
let Insertion_sort=(arr)=>{
    const len=arr.length
    for(let i=1;i<len;i++){
        preIndex=i-1
        // 取牌
        current=arr[i]
        // 找位置
        while(preIndex>=0&&arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex]//元素后退
            preIndex--
        }
        // 插牌
        arr[preIndex+1]=current
    }
    return arr
}

console.log(Insertion_sort(arr))