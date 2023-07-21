import Node from './BST.js'//此处的.js必须要加，因为还没有解析后缀包还未引入

const arr=['A','B','C']
const tree=new Node()

arr.forEach(v=>tree.insert(v))

console.log(tree)