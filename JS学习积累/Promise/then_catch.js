// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     reject('error');
//     console.log(2);
//     resolve()
// })
// promise.then(() => {
//     console.log(3);
// }).catch(e => console.log(e))
// console.log(4)

//Promise构造函数的代码会立即执行，then和catch代码会放入异步微任务队列，在宏任务结束后立即执行。于是输出：1 2 4 error

// 异步队列中先执行微任务再执行宏任务，同步队列中宏任务执行完立即执行微任务
const p1 = () => (new Promise((resolve, reject) => {
	console.log(1);
	let p2 = new Promise((resolve, reject) => {
		console.log(2);
		const timeOut1 = setTimeout(() => {
			console.log(3);
			resolve(4);
		}, 0)
		resolve(5);
	});
	resolve(6);
	p2.then((arg) => {
		console.log(arg);
	});

}));
const timeOut2 = setTimeout(() => {
	console.log(8);
	const p3 = new Promise(reject => {
		reject(9);
	}).then(res => {
		console.log(res)
	})
}, 0)


p1().then((arg) => {
	console.log(arg);
});
console.log(10);