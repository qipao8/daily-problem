// 92. 反转链表 II
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 示例 1：
// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

// 示例 2：
// 输入：head = [5], left = 1, right = 1
// 输出：[5]

// 提示：
// 链表中节点数目为 n
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

// 进阶： 你可以使用一趟扫描完成反转吗？
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let pre=Phead=new ListNode(0,head)
    for(let i=0;i<left-1;i++){
        pre=pre.next
    }
    let cur=pre.next
    for(let i=0;i<right-left;i++){
        let x=cur.next
        cur.next=x.next
        x.next=pre.next
        pre.next=x
    }
   return Phead.next
};
let foo = () => {
    let arr = [1,2,3,4,5], head = cur = new ListNode(0, null)
    arr.forEach(v => {
        cur.next = new ListNode(v)
        cur = cur.next
    })
    reverseBetween(head.next,2,4)
    
}
foo()