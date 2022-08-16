/**
 * 新建树结构
 * @param {*} arr 
 * @returns 
 */
const buildTree = (arr) => {
    tmp = {};
    res = {};
    for (let i in arr) {
        tmp[arr[i].id] = arr[i];
    }

    for (let i in tmp) {
        if (tmp[i].parentId) { // 如果节点没有父节点，即该节点为根节点
            if (!tmp[tmp[i]?.parentId].children) { // 该节点的父节点和该节点没有形成关系
                tmp[tmp[i].parentId].children = new Object();
            }
            tmp[tmp[i].parentId].children[tmp[i].id] = tmp[i];

        } else {
            res[tmp[i].id] = tmp[i];
        }
    }
    return res;
}
var menu_list = [
    {
        id: 2,
        parentId: 1
    },
    {
        id: 1,
        parentId: 0
    },
    
    {
        id: 3,
        parentId: 2
    },
    {
        id: 4,
        parentId: 2
    },
    {
        id: 5,
        parentId: 2
    },
    {
        id: 6,
        parentId: 1
    },
]

console.log(buildTree(menu_list));

