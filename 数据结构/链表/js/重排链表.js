// 143. 重排链表
// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 递归遍历（n*n）
 let foo = (head) => {
    let cur = head
    while (cur.next.next)
        cur = cur.next
    cur.next.next=head.next
    head.next=cur.next
    cur.next=null
    return head
}
var reorderList = function (head) {
    let cur=head
    while(cur.next&&cur.next.next){
        foo(cur)
        cur=cur.next.next
    }
    return head
};


// 找中点，反转，合并
 var reorderList = function (head) {
    if(!head.next) return head
    let fast = slow = head,right=null
    // 找出后半段链表
    while (fast && fast.next) {
        fast = fast.next.next
        if(!fast||!fast.next) right=slow
        slow = slow.next
    }
    right.next=null
    // 反转后半段链表
    let prev = null, cur = slow
    while (cur) {
        let x = cur.next
        cur.next = prev
        prev = cur
        cur = x
    }
    // 合并前后两链表
    let curr=head
    while(curr.next){
        let x=prev.next
        let y=curr.next
        prev.next=curr.next
        curr.next=prev
        curr=y
        prev=x
    }
    curr.next=prev
    return head
};