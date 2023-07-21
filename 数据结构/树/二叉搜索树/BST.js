// 二叉搜索树:一个节点最多只有两个子节点，左子节点<父节点<右子节点
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    insert(key) {
        if (this.key == undefined) {
            this.key = key
        } else {
            this.insertNode(this, key)
        }
    }
    insertNode(node, key) {
        if (this.key < key) {
            if (node.right == null)
                node.right = new Node(key)
            else this.insertNode(node.right, key)
        }else{
            if(node.left==null) node.left=new Node(key)
            else this.insertNode(node.left,key)
        }
    }
}
export default Node
// let arr = [11,7,15]

// const tree=new Node()
// arr.forEach(v=>tree.insert(v))
// tree.insert(5)
// console.log(tree)