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
 * @return {number}
 */
// var maxDepth = function (root) {
//     if(!root){
//         return 0;
//     }
//     return  Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };
var maxDepth = function (root) {
    if(!root){
        return 0;
    }
    let depth = 0;
    let stack = [root];
    while(stack.length>0){
        let size = stack.length;
       
        while(size>0){
            let child = stack.shift();
            if(child.left!==null){
                stack.push(child.left)
            }
             if(child.right!==null){
                stack.push(child.right)
             }
             size--;
        }
        depth+=1
    }
    return depth;
};

