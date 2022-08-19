

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    let left = 0;
    let yW = matrix.length;
    let xW = matrix[0].length;
    let right = xW * yW - 1;
    while (left <= right) {
        let mid = (left + right) >>> 1;
        let num = matrix[Math.floor(mid / xW)][mid % xW];
        console.log(mid,num,left,right)
        if (num < target) {
            left = mid + 1
        } else if (num > target) {
            right = mid - 1;
        } else {
            return true
        }
    }
    return false;

};
const res = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)
console.log(res);