/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
    let max = 0;
    let flagArr = new Array(grid.length);
    //  console.log(flagArr);
    //  let n1 = new Array(grid[0].length).fill(false);
    //  flagArr.fill(n1);
    //  console.log(flagArr);
    //  n1[0] = true
    //  console.log(flagArr);
    //flagArr.fill(false);
    //console.log(flagArr);
    for (let i = 0; i < flagArr.length; i++) {
        flagArr[i] = [];
        for (let j = 0; j < flagArr[i].length; j++) {
            console.log(flagArr[i][j]);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let area = dfs(grid, i, j, flagArr);
            max = Math.max(max, area)

        }
    }

    return max;

};

const dfs = (grid, i, j, flagArr) => {
    // console.log(flagArr); 
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0 || flagArr[i][j]) {
        return 0;
    }
    console.log(i, j, grid[i][j], '--------');
    flagArr[i][j] = true;
    if (grid[i][j] === 1) {
        flagArr[i][j] = true;
        return 1 +
            dfs(grid, i + 1, j, flagArr) +
            dfs(grid, i - 1, j, flagArr) +
            dfs(grid, i, j - 1, flagArr) +
            dfs(grid, i, j + 1, flagArr);
    } else {
        return 0;
    }
}

console.log(
    maxAreaOfIsland(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1]
        ]
    )
)

// console.log(maxAreaOfIsland([
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])
// )