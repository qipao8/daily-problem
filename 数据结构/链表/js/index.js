// 链表结构
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
/*
示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
*/

process.stdin.on('data', input=>{
    let arr = input.toString().trim().split(' ')
    if (arr.length != 0 && arr.length != 1) {
        let n = eval(arr[0])
        let m = eval(arr[1])
        console.log(n,m,typeof(n))
    }else{
        process.stdin.on('end',()=>{
            // 用于绑定输入结束提示消息
            console.log('输入结束')
        })
        process.stdin.emit('end')//end事件发射
        process.exit()//退出控制台输入
    }
})

var addTwoNumbers = function (l1, l2) {
    
}