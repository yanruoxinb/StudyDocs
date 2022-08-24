
/**
 * 数组扁平化
 * @param {*} arr 
 * @returns 
 */
function flattern(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            result = result.concat(flattern(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flattern([1, 2, 3, [3, 4, 6], [[3, 4, 5, 6]]]))

function flatten_2(arr) {
    while (arr.some(item => Array.isArray(item))) {
        console.log(arr, '--------arr-----');
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten_2([1, 2, 3, [3, 4, 6], [[3, 4, 5, 6]]]))
