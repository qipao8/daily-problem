// 使用递归排序或者转数组排序

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
let head = null, current = null
process.stdin.on('data', input => {
    let v = input.toString().trim()
    if (v != '') {
        // 如果是空链表，那么创建头结点和当前节点
        if (!head)
            head = current = new ListNode(v)
        else {
            // 不是空节点那么，头结点和当前节点的指向一致，通过新建当前节点的下一节点为一个新节点，那么head也会有下一节点。
            current.next = new ListNode(v)
            // 改变当前节点的指向，脱离了与head的共同指向，从此head用于保存，而当前节点用于新增节点操作。
            current = current.next
        }
    } else {
        //递归排序
        console.log(sortList(head))

        process.exit()
    }
})

const merge = (head1, head2) => {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = head1, temp2 = head2;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
}

var sortList = function(head) {
    if (head === null) {
        return head;
    }
    let length = 0;
    let node = head;
    while (node !== null) {
        length++;
        node = node.next;
    }
    const dummyHead = new ListNode(0, head);
    for (let subLength = 1; subLength < length; subLength <<= 1) {
        let prev = dummyHead, curr = dummyHead.next;
        while (curr !== null) {
            let head1 = curr;
            for (let i = 1; i < subLength && curr.next !== null; i++) {
                curr = curr.next;
            }
            let head2 = curr.next;
            curr.next = null;
            curr = head2;
            for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
                curr = curr.next;
            }
            let next = null;
            if (curr !== null) {
                next = curr.next;
                curr.next = null;
            }
            const merged = merge(head1, head2);
            prev.next = merged;
            while (prev.next !== null) {
                prev = prev.next;
            }
            curr = next;
        }
    }
    return dummyHead.next;
};
