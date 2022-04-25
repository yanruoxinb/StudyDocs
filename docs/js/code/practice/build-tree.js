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
        if (tmp[i].parent_id) { // 如果节点没有父节点，即该节点为根节点
            if (!tmp[tmp[i].parent_id].children) { // 该节点的父节点和该节点没有形成关系
                tmp[tmp[i].parent_id].children = new Object();
            }
            tmp[tmp[i].parent_id].children[tmp[i].id] = tmp[i];
           

        } else {
            res[tmp[i].id] = tmp[i];
        }
    }
    return res;
}
var menu_list = [
    {
        id: 2,
        parent_id: 1
    },
    {
        id: 1,
        parent_id: 0
    },
    
    {
        id: 3,
        parent_id: 2
    },
    {
        id: 4,
        parent_id: 2
    },
    {
        id: 5,
        parent_id: 2
    },
    {
        id: 6,
        parent_id: 1
    },
]

console.log(buildTree(menu_list));

