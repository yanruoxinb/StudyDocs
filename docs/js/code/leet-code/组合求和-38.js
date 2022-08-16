/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 var combinationSum = function (candidates, target) {
    let res = []

    const dfs = (candidates, target, startIndex, sum, tempArr) => {
        if (sum === target) {
            res.push([...tempArr]);
            return;
        }
        if (startIndex === candidates.length) {
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                tempArr.push(candidates[i]);
                dfs(candidates, target, i, sum + candidates[i], tempArr);
                tempArr.pop();
            }
        }
    }
    dfs(candidates, target, 0, 0, [])
    return res;
};

console.log(combinationSum([2,3,5,7],7))