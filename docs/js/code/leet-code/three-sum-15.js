/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    let res = []
   const numSort = nums.sort((a, b) => { return a - b });
    for (let i = 0; i < numSort.length - 1; i++) {
        let target = -(numSort[i]);
        if ( i > 0 && numSort[i] == numSort[i - 1] )
        {
            continue;
        }
        let left = i+1;
        let right = numSort.length - 1;
        while (left < right ) {
            let sum = numSort[left] + numSort[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++; 
            } else {
                res.push([numSort[i], numSort[left], numSort[right]]);
                left++;
                right--;
                while (numSort[left] === numSort[left - 1] &&left < right ) {
                    left++
                }
                while (numSort[right] === numSort[right + 1] &&left < right) {
                    right--;
                }
                
            }
        }
    }
    return res;
};

console.log(threeSum([0,0,0,0]),'----res----')
console.log(threeSum([-1,0,1,2,-1,-4]    ),'----res----')
console.log(threeSum([-2,0,0,2,2]),'----res----')