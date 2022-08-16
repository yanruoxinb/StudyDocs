/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。
 * 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const len = nums.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if (map.get(nums[i]) > len / 2) {
            return nums[i];
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]));
