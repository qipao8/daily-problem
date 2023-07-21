function ListNode(x){
    this.val = x;
    this.next = null;
}
var reverseList = function(head) {
    if(!head||!head.next) return head
    let prev=cur=new ListNode(0,head)
    cur=cur.next //head
    while(cur.next){
        let x=cur.next
        // 由于类似删除操作，所以cur一直在往后移动
        cur.next=x.next
        // prev.next用于保存每次反转的链表情况
        x.next=prev.next
        // 不断重置head
        prev.next=x
    }
    return prev.next
};