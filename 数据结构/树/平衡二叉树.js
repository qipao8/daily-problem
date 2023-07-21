let Height=(root)=>{
    if(!root) return 0
    let leftHeight=Height(root.left),rightHeight=Height(root.right)
    if(leftHeight===-1||rightHeight===-1||Math.abs(leftHeight-rightHeight)>1)
    return -1
    else return Math.max(leftHeight,rightHeight)+1
}
var isBalanced = function(root) {
    return Height(root)>=0
};