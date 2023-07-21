// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head||!head.next) return false
    let fast=head.next,slow=head
    while(fast!=slow){
        if(fast == null || fast.next == null) return false
        fast=fast.next.next
        slow=slow.next
    }
    return true
};