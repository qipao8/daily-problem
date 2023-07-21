let x=3
setTimeout(()=>x+=4,1000)

核心思想：
为了让后续代码能够使用x，异步执行的函数需要在更新x的值以后通知其他代码。如果程序不需要这个值，那么就只管继续执行，不必等待这个结果了

promise基本规则：
1. 首先Promise构造函数会立即执行，而Promise.then()内部的代码在当次事件循环的结尾立即执行(微任务)。
2. promise的状态一旦由等待pending变为成功fulfilled或者失败rejected。那么当前promise被标记为完成，后面则不会再次改变该状态。
3. resolve函数和reject函数都将当前Promise状态改为完成，并将异步结果，或者错误结果当做参数返回。
4. Promise.resolve(value)
返回一个状态由给定 value 决定的 Promise 对象。如果该值是 thenable(即，带有 then 方法的对象)，返回的 Promise 对象的最终状态由 then 方法执行决定；否则的话(该 value 为空，基本类型或者不带 then 方法的对象),返回的 Promise 对象状态为 fulfilled，并且将该 value 传递给对应的 then 方法。通常而言，如果你不知道一个值是否是 Promise 对象，使用 Promise.resolve(value) 来返回一个 Promise 对象,这样就能将该 value 以 Promise 对象形式使用。

5. Promise.all(iterable)/Promise.race(iterable)
简单理解，这2个函数，是将接收到的promise列表的结果返回，区别是，all是等待所有的promise都触发成功了，才会返回，而race有一个成功了就会返回结果。其中任何一个promise执行失败了，都会直接返回失败的结果。

6. promise对象的构造函数只会调用一次，then方法和catch方法都能多次调用，但一旦有了确定的结果，再次调用就会直接返回结果。