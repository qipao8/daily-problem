// 203. 移除链表元素
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 只要是头部可能删除的情况，都要加入首部空节点
 var removeElements = function (head, val) {
    let res = cur = new ListNode(0, head)
    if (!head) return head
    while (cur.next) {
        if (cur.next.val == val) {
            cur.next = cur.next.next
        } else cur = cur.next
    }
    return res.next
};