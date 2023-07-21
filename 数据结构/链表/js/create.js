function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
process.stdin.on('data', input => {
    let v = input.toString().trim()
    if (v) {
        let arr = JSON.parse(v), head=cur=new ListNode(0,null)
        arr.forEach(v => {
            cur.next = new ListNode(v)
            cur=cur.next
        })
        console.log(head.next)
    } else process.exit()
})