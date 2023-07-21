class person {
    name = this.name
    age = this.age
}
const lm = new person()
lm.name = '李敏'
lm.age = 10

function myTag(array, ...keys) {
    const str = `,${keys[1] ? `是否成年：${keys[1] >= 18 ? '成年了' : '未成年'}` : '未出生'}`
    return array[0] + keys[0] + array[1] + keys[1] + str
}
console.log(myTag`姓名：${lm.name},年龄：${lm.age}`)


// 高级写法
// function template(strings, ...keys) {//通过数组传入参数
//     //以函数的方式返回
//     return (function (...values) {//values传入的是调用模板函数的函数的参数，相当于二次参数
//         //传参同时解构赋值，values为参数数组，相当于arguements
//         var dict = values[values.length - 1] || {};
//         var result = [strings[0]];
//         console.log(strings)
//         keys.forEach(function (key, i) {
//             var value = Number.isInteger(key) ? values[key] : dict[key];
//             result.push(value, strings[i + 1]);
//             console.log(result)
//         });
//         return result.join('');
//     })
// }

// var t1Closure = template`${0}${1}${0}!`;
// t1Closure('Y', 'A')// "YAY!"
// var t2Closure = template`${0} ${'foo'}!`;
// t2Closure('Hello', { foo: 'World' });  // "Hello World!"
