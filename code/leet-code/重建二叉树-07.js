function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0) {
        return null;
    }
    let root = new TreeNode();
    let index = inorder.findIndex(item => item == preorder[0]);
    root.val = preorder.shift();
   
    root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index), inorder.slice(index + 1));

    return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))