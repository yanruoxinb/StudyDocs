
interface ListNode {
    name: string;
    id: number;
    parentId: number;
}

interface TreeNode {
    name: string;
    id: number;
    chilldren?: TreeNode[]
}


function convert(arr: ListNode[]) {

    const map = new Map();
    let root: TreeNode | null = null;
    arr.forEach(item => {
        const { id, name, parentId } = item;
        const treeNode = { id, name };
        map.set(id, treeNode);
        // 找到parentNode
        const parentNode = map.get(parentId);
        if (parentNode) {
            if (parentNode.chilldren === null) {
                parentNode.chilldren = [];
            }
            parentNode.chilldren.push(treeNode)
        }

        if (parentId === 0) {
            root = treeNode;
        }

    })
    return root;

}