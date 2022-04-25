/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function (root1, root2) {
    return dfs(root1,root2)
};

const dfs = function (root1, root2) {

    if (root1 ==null || root2 ==null) {
        return root1 == null ? root2 : root1;
    }
     if (!root1 && !root2 ) {
        return null;
    }
    let node = new TreeNode();
    node.val = (root1.val?root1.val:0) + (root2.val?root2.val : 0);
    node.left = dfs(root1.left, root2.left);
    node.right = dfs(root1.right, root2.right)
    return node;
}

let tree1 = {
    val: 1,
    left: {
        vale: 3,
        left: {
            val: 5
        }
    },
    right: {
        val: 2
    }
}

let tree2 = {
    val: 2,
    left: {
        vale: 1,
        right: {
            val: 4
        }
    },
    right: {
        val: 3,
        right: {
            val: 7
        }
    }
}

console.log(mergeTrees(tree1, tree2));