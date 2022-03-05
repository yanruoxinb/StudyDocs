
/**
 * 冒泡排序
 * 说明：每次把最大的数放到最后
 * @param {*} arr 
 * @returns 
 */
function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        throw Error('非数组不能排序')
    }
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length-1; i++){
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}

console.log(bubbleSort([5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]))