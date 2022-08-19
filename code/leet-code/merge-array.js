
/**
 * 合并二维有序数组成一维有序数组，归并排序的思路
 * @param {*} arr 
 * 参考文档：https://www.cnblogs.com/chengxiao/p/6194356.html
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr[0];
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid, arr.length));
    let mergeArr = merge(leftArr, rightArr);
    return mergeArr;
}

function merge(leftArr, rightArr) {
    let result = []
    let lenLeft = leftArr.length;
    let lenRight = rightArr.length;
    let i = 0, j = 0;
    while (i < lenLeft && j < lenRight) {
        if (leftArr[i] < rightArr[j]) {
            result.push(leftArr[i]);
            i++;

        } else {
            result.push(rightArr[j]);
            j++;
        }

    }
    if (i < lenLeft) {
        result = [...result, ...leftArr.slice(i, lenLeft)]

    }
    if (j < lenRight) {
        result = [...result, ...rightArr.slice(j, lenRight)]
    }
    return result;
}

console.log(mergeSort([[1, 5, 6, 10, 20], [2, 4, 8], [3, 5], [2, 3, 5, 6, 7, 12], [1, 9, 10]]))