let demo1 = {
    a: 1
}
let demo2 = Object.create(demo1)
console.log(demo2) // 1

// Object.create()会创建一个对象，新对象的原型就是传入的参数对象。

console.log(demo2.__proto__===demo1) //true

demo2.a = 100
console.log(demo1.a)