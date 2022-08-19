/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    if (nums.length <= 1) {
        return nums[0];
    }
    if (nums[0] < nums[right]) {
        return nums[0];
    }

    while (left < right) {
        let mid = (left + right) >>> 1;
        if (nums[mid] >= nums[0]) {
            left = mid + 1;
        } else {
            right = mid
        }

    }
    return nums[left];

};

console.log(findMin([2, 1]));