/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 使用集合时间复杂度n(m+n),空间复杂度（n)
var getIntersectionNode = function (headA, headB) {
    let setA = new Set(), cur = headA
    while (cur) {
        setA.add(cur)
        cur = cur.next
    }
    cur = headB
    while (cur) {
        if (setA.has(cur)) {
            return cur
        }
        cur = cur.next
    }
    return null
};

// 1234567
//    a567

// 1234567a567
// a5671234567

// 双指针法
// 你有你的路要走，我也有我的。
// 现在有一条我们的路（headA+headB/headB+headA），如果我们有缘（公共节点），自会相遇
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let me = headA, you = headB
    while (me !== you) {
        me = me ? me.next : headB
        you = you ? you.next : headA
    }
    return me
};