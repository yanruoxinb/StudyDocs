/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        let num = matrix[Math.floor(mid / n)][mid % n];
        console.log(num,mid)
        if (num > target) {
            right = mid - 1;
        } else if (num < target) {
            left = mid + 1;
        } else {
            return true;
        }
        console.log(right, left);
    }
    return false;
 };

 console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))