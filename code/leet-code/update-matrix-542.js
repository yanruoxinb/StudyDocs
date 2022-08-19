/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    if (null == mat) { return mat; } 
    let flag = new Array(mat.length);
    
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        flag[i] = new Array(mat[i].length);
        flag[i].fill(-1);
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                flag[i][j] = 0;
                count++;
            }

        }
    }

    let step = 1;
    let sum = mat.length * mat[0].length;
    let n = mat.length;
    let m = mat[0].length;
    while (count < sum) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (flag[i][j] === step - 1) {
                    if (setStep(flag, n, m, i, j - 1, step)) { count++; }
                    if (setStep(flag, n, m, i, j + 1, step)) { count++; }
                    if (setStep(flag, n, m, i-1, j, step)) { count++; }
                    if (setStep(flag, n, m, i+1, j, step)) { count++; }
                }
            }
        }
        step++;
    }

    return flag;
};

var setStep = function (flag,n,m, i, j, step) { 
    if (i >= n || i < 0 || j < 0 || j >= m) { 
        return false;
    }
    if (flag[i][j] < 0 || flag[i][j] > step) { 
        flag[i][j] = step;
        return true;
    }
    return false;
}



console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))