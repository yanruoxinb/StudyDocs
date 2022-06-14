/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var fourSum = function (nums, target) {
    let res = []
    const numSort = nums.sort((a, b) => { return a - b });

    for (let i = 0; i < numSort.length - 3; i++) {
        if (i > 1 && numSort[i] == numSort[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < numSort.length - 2; j++) {
            if (j > 1 && numSort[j] == numSort[j - 1]) {
                continue;
            }
            let needNum = target - numSort[i] - numSort[j]
            let left = j + 1;
            let right = numSort.length - 1;
            while (left < right) {
                let sum = numSort[left] + numSort[right];
                if (sum > needNum) {
                    right--;
                } else if (sum < needNum) {
                    left++;
                } else {
                    console.log(i,j,left,right)
                    res.push([numSort[i], numSort[j], numSort[left], numSort[right]]);
                    left++;
                    right--;
                    while (numSort[left] === numSort[left - 1] && left < right) {
                        left++
                    }
                    while (numSort[right] === numSort[right + 1] && left < right) {
                        right--;
                    }

                }
            }
        }

    }
    return res;
};


// console.log(fourSum([1, 0, -1, 0, -2, 2], 0), '----res----')
// console.log(fourSum([0, 0, 0, 0], 0), '----res----')
// console.log(fourSum([-2,-1,-1,1,1,2,2], 0), '----res----')
// console.log(fourSum([-2,0,0,2,2]),'----res----')
console.log(fourSum([2,2,2,2,2],8))