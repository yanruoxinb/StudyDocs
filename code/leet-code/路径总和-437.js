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
 * @param {number} targetSum
 * @return {number}
 */
let count = 0;
var pathSum = function (root, targetSum) {
    if (!root) {
        return 0;
    }
    console.log('-enter--',root.val)
    let sum = root.val;
    const dfs = (root, sum, path) => {
        if (!root) {
            return;
        }
        path+=`-${root.val}`
        if (root.left) {
            let newNum = sum + root.left.val
            if (newNum === targetSum) {
                console.log(count, path+`-${root.left.val}`, '------left')
                count++;
            }

            dfs(root.left, newNum, path)
        }
        if (root.right) {
            let newNum = sum + root.right.val;
            if (newNum === targetSum) {
                console.log(count, path+`-${root.right.val}`, '---right')
                count++;
            }
            dfs(root.right, newNum, path)
        }
    }
    dfs(root, sum, '')
    pathSum(root.left, targetSum);
    pathSum(root.right, targetSum);
    return count;
};

console.log(
    pathSum(
        {
            val: 5,
            left: {
                val: 4,
                left: {
                    val: 11,
                    left: {
                        val: 7,
                    },
                    right: {
                        val: 2
                    }
                }
            },
            right: {
                val: 8,
                left: {
                    val: 13
                },
                right: {
                    val: 4,
                    left: {
                        val: 5
                    },
                    right: {
                        val: 1
                    }
                }
            }
        }
        , 22))