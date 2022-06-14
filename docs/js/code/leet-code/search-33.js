
const findRotateIndex = (nums) => {
    let startIndex = 0;
    let endIndex = nums.length - 1

    while (startIndex < endIndex) {
        let mid = (startIndex + endIndex) >> 1;
        if (nums[mid] < nums[0]) {
            endIndex = mid;
        } else {
            startIndex = mid + 1;
        }

    }
    return startIndex;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if ((nums.length === 1 && nums[0] != target) || nums.length < 1) {
        return -1
    };




};

// console.log(findRotateIndex([4,5,6,7,0,1,2]))
console.log(findRotateIndex([4, 5, 6, 0, 1, 2]))