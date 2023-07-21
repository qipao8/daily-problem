// 82. 删除排序链表中的重复元素 II
// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
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
// 集合法
 var deleteDuplicates = function (head) {
    let set = new Set(), dv = 101
    while (head) {
        if (set.has(head.val)) {
            dv = head.val
        } else {
            if (dv !== 101) {
                set.delete(dv)
                dv = 101
            }
            set.add(head.val)
        }
        head = head.next
    }
    if (dv !== 101) {
        set.delete(dv)
    }
    let cur = head
    for (let k of set) {
        if (head) {
            cur.next = new ListNode(k)
            cur = cur.next
        } else {
            head = cur = new ListNode(k)
        }
    }
    return head
};
// 指针提前
var deleteDuplicates = function (head) {
    if(!head) return head
    let res=cur=new ListNode(0,head)
    while(cur.next&&cur.next.next){
        if(cur.next.val==cur.next.next.val){
            let dv=cur.next.val
            while(cur.next&&cur.next.val==dv){
                cur.next=cur.next.next
            }
        }else{
            cur=cur.next
        }
    }
    return res.next
};