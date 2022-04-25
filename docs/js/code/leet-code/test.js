/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
     let list = deepSearch(root);
     let i = 0;
     let n = 1;
     while (i < list.length) {
         let count = Math.pow(2, n)-1;
        for (; i < count; i++ ) {
            if (i >= length) { 
                break;
            }
            if (i != count - 1) {
                res[i].next = res[i+1];
            }
        }
     }

};

var deepSearch = (root) => {
    let quene = [];
    let res = [];
    if (!root) {
        return;
    }
    quene.push(root);
    while (quene.length > 0) {
        let node = quene.shift();
        res.push(node);
        if (node.left) {
            quene.push(node.left);
        }
        if (node.right) {
            quene.push(node.right)
        }
    }
    return res;
}

let tree2 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val:4
        },
        right: {
            val: 5,
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }
}

console.log(deepSearch(tree2));