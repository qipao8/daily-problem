// 抖动的概念
// 当持续触发事件，一定时间内没有再次触发事件，事件处理函数才会只执行一次
// 如果设定的时间到达之前，又一次触发了事件，就重新开始计时

const input = document.getElementById('input')

// function foo(delay, value) {
//     setTimeout(() => console.log(value), delay)
// }

// input.addEventListener('keyup', e => {
//     foo(1000, e.target.value)
// })

// 在一秒内连续输入，就会造成抖动

// 防抖：监听一段时间内，事件是否再次触发，再次触发则不做任何事（计时器会存在与堆内存中），直到一段时间过去后再执行。
// 重点使用闭包函数存储计时器，然后在每次事件触发，下一个计时器生成前清除上一个计时器

function foo(delay) {
    let timer
    return function (value) {
        clearTimeout(timer)
        timer = setTimeout(() => console.log(value), delay)
    }
}
let f = foo(1000)
input.addEventListener('keyup', e => {
    f(e.target.value)
})