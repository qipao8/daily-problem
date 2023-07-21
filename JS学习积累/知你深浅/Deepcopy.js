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

let a={1:"a",2:"b"}
let b=copy(a)
b[2]="c"
console.log(a,b)

// JSON

// 混合拷贝
let x={1:"a",2:"b"}
let y={...x}
y[2]="y"
console.log(x,y)