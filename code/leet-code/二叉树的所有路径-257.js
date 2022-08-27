/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];

    if (!root) {
        return '';
    }
    const dfs = (root, path = '') => {
        if (!root?.left && !root?.right) {
            res.push(path + root.val);
            return;
        } else {  // path += root.val;
            if (root.left) {
                dfs(root.left, path + root.val);
            }
            if (root.right) {
                dfs(root.right, path + root.val);
            }
        }
    }
    dfs(root, '')
    return res;
};

console.log(binaryTreePaths({
    val: 1,
    left: {
        val: 2,
        right: {
            val: 5
        }
    },
    right: {
        val: 3
    }
}))