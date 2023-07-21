// 后序遍历
const construct = (lower, upper, stack) => {
    if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
        return null;
    }
    const val = stack.pop();
    const root = new TreeNode(val);
    root.right = construct(val, upper, stack);
    root.left = construct(lower, val, stack);
    return root;
}
construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack);
