// ES6 class 的本质是 function。
// 它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。

// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

class Example{
    constructor(a) {
        this.a = a; // 实例化时调用 set 方法
    }
    // getter 与 setter 必须同级出现
    get a(){
        console.log('getter');
        return this.a
    }
    set a(a){
        console.log('setter');
    }
}
let exam = new Example(2);

// 子类 constructor 方法中必须有 super ，且必须出现在 this 之前。