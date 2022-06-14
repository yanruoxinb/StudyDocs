
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let x = matrix[0].length - 1;
    let y = matrix.length - 1;

    while (i<=x && y >= 0) {
        if (matrix[i][y] === target) {
            return true;
        } else if (matrix[i][y] < target) {
            
        } else {
            
        }

    }

};