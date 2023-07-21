## 满足特定条件的子数组问题
    问题一般是：求一个数组中的（连续）子数组，该子数组满足一个怎么怎么样的条件。

### 常用解题模板：滑动窗口（超时）

```
let func=(nums)=>{
    let left=right=0,len=nums.length
    for(;left<len;left++){
        while(right<len){
            //满足特定条件
            right++
        }
    }
}
```

### 优化解题模板：哈希表法