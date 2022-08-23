/**
 * 快速排序
 * 说明：选择一个基准值，比这个基准值小的数在它的前面，比基准值大的数在它的后面
 * @param {*} arr 需要排序的数组
 * @returns 
 */
function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw Error('非数组不能排序')
    }
    if (arr.length <= 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let baseIndex = Math.floor(arr.length / 2);
    let baseNum = arr.splice(baseIndex, 1)[0];
   
    for (let i = 0; i <= arr.length - 1; i++){
        if (arr[i] < baseNum) {
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return quickSort(leftArr).concat([baseNum],quickSort(rightArr))
}

console.log(quickSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]))
console.log(quickSort([1, 1]));
console.log(quickSort([1, 3, 4]));
