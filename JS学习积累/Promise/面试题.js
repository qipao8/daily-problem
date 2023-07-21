async function async1() {
    console.log('2')
    await async2()
    console.log('6')
}
async function async2() {
    console.log('3');
}
console.log('1')
setTimeout(function () {
    console.log('8')
}, 0)
async1();
new Promise(function (resolve) {
    console.log('4')
    resolve();
}).then(function () {
    console.log('7')
})
console.log('5')

// console.log('start')
// setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
//   Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer3')
//   Promise.resolve().then(() => {
//     console.log('promise3')
//   })
// }, 0)
// new Promise(function(resolve) {
//   console.log('promise4');
//   resolve();
// }).then(function() {
//   console.log('promise5')
// })
// console.log('end')
