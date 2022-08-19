function getMax() {
    let arr = [
        [7],
        [3, 8],
        [8, 1, 0],
        [2, 7, 4, 4]
    ];
    //n表示层数
    let i = 0; let j = 0;
    let maxSum = getMaxSum(arr, arr.length - 1, i, j);
    return maxSum;
}

function getMaxSum(arr, n, i, j) {
    if (i == n) {
        return arr[i][j];
    }
    let left = getMaxSum(arr, n, i + 1, j);
    console.log('----left----' + left)
    let right = getMaxSum(arr, n, i + 1, j + 1);
    console.log(left, right);
    return Math.max(left, right) + arr[i][j];
}

// console.log(getMax())

function getMaxSum() {
    let arr = [
        [7],
        [3, 8],
        [8, 1, 0],
        [2, 7, 4, 4]
    ];
    // let maxSum;
    let n = arr.length - 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {

            arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
            console.log(i, j, arr[i][j]);
        }
    }
    return arr[0][0];
}

console.log(getMaxSum())

function getRoadLength(width, height) {
    let i = 0, j = 0; maxLen = 0;
    while (i < width - 1 && j < height - 1) {

    }

}