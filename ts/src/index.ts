let sb: symbol = Symbol('a')
let obj: object = new Object()
obj[sb] = 2
let bigint: bigint = BigInt(5555555555555555555555555555555)

// 元组
let x:[string, number]=['jsfs',90]

// 枚举
enum Color { red=10, green, blue, alpha }
console.log(Color.red,Color.alpha,Color[11])
// 10 13 green