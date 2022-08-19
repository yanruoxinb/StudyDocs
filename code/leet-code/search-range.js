
const findLeft = (nums, target) => {
    let startIndex = 0;
    let ans = 0;
    let endIndex = nums.length - 1;
    while (startIndex < endIndex) {
        let mid = Math.floor((startIndex + endIndex) / 2)
        if (nums[mid] > target) {
            endIndex = mid - 1;
        } else if (nums[mid] < target) {
            startIndex = mid + 1;
        } else {
            ans = mid;
            endIndex = mid - 1;
        }
    }
    return nums[startIndex] === target ? startIndex : ans;
}

const findRight = (nums, target) => {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let ans = 0;
    while (startIndex < endIndex) {
        let mid = Math.floor((startIndex + endIndex) / 2)
        if (nums[mid] > target) {
            endIndex = mid - 1;
        } else if (nums[mid] < target) {
            startIndex = mid + 1;
        } else {
            ans = mid;
            startIndex = mid + 1;
        }
    }
    return nums[endIndex] === target ? endIndex : ans;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [-1, -1]
    if (nums.length <= 0) {
        return res;
    }
    let leftIndex = findLeft(nums, target);
    let rightIndex = findRight(nums, target);
    // let rightIndex = -1;
    console.log(leftIndex, rightIndex)
    if (nums[leftIndex] === target) {
        return [leftIndex, rightIndex]
    }
    return res;

};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([2,2], 2));