// 给定一个整数，写一个函数来判断它是否是 4 的幂次方。
// 如果是，返回 true ；否则，返回 false 。

// 注意整数含0!!!

// 使用递归一行代码解决
var isPowerOfFour = function (n) {
    return n === 0 ? false : n === 1 ? true : n % 4 === 0 ? isPowerOfFour(n / 4) : false
};

console.log(isPowerOfFour(0))