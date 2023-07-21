/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 复杂度分析

// 时间复杂度：O(n \log n)O(nlogn)，其中 nn 是链表的长度。

// 空间复杂度：O(\log n)O(logn)，其中 nn 是链表的长度。空间复杂度主要取决于递归调用的栈空间。

 const mergeTwoLists = function (list1, list2) {
    let prev = cur = new ListNode(-1)
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    // 因为是一个一个加，末尾终会有一个链表为空
    cur.next = !list1 ? list2 : list1
    return prev.next
};
const tosortList = (head, tail) => {
    if (!head) return head
    if (head.next === tail) {
        head.next = null
        return head
    }
    let fast = slow = head
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }
    const mid = slow
    return mergeTwoLists(tosortList(head, mid), tosortList(mid, tail))
}
var sortList = function (head) {
    return tosortList(head, null)
};