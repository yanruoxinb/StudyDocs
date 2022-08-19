
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



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    if (nums.length < 1) {
        return -1;
    }
    if (nums.length === 1) {
        return nums[0] !== target ? -1 : 0
    }

    
    while (left <= right) {
        let mid = left + (right - left) / 2;
        console.log(mid,target,nums[mid]);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[left] <= nums[mid]) {
            // 左边递增
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        } else {
            // 右边递增
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1;
            }

        }

    }
    return -1;

};
let res = search([1,3],1)
console.log(res);