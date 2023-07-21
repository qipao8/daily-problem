## 拷贝知深浅
> 浅拷贝是拷贝堆内存的地址，深拷贝是拷贝堆内存中的值

### 深拷贝
> 1.JSON.parse(JSON.stringify(obj))
2.递归遍历
const copy=(obj)=>{
    let newobj=Array.isArray(obj)?[]:{}
    if(obj&&typeof obj=="object"){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key]&&typeof obj[key]==="object")
                    newObj[key]=copy(obj[key])
                else
                newobj[key]=obj[key]
            }
        }
    }
    return newobj
}

### 深浅混合拷贝————结构赋值
只能拷贝一维数据
> const newobj=Array.isArray(obj)?[...obj]:typeof obj==="object"?{...obj}:obj

### 浅拷贝 = 