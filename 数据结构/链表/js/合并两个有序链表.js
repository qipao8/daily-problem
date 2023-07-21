var mergeTwoLists = function (list1, list2) {
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