

/**
 * 选择排序
 * 说明：每次选择一个最小的数放在起始位置
 * @param {*} arr 
 * @returns 
 */
function selectSort(arr) {
    if (!Array.isArray(arr)) {
        throw Error('非数组不能排序')
    }
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length - 1; i++){
        let idx = i;
        for (j = i + 1; j < arr.length; j++){
            if (arr[idx] > arr[j]) {
                idx = j
            }
        }
        if (arr[i] > arr[idx]) {
            let temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] =temp;
        }
    }
    return arr;
}

console.log(selectSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]))
console.log(selectSort([1, 1]));
console.log(selectSort([1, 3, 4,2,3,5,1,2]));