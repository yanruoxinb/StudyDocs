let findIndex = -1
const search = function(nums, target) {
    if(nums.length<1){
        return -1;
    }
    else if(nums.length===1){
        return nums[0]===target?0:-1
    }
   return  find(nums,target,0,nums.length-1)
};

const find = (nums, target, startIndex, endIndex) => {
    
    if (startIndex === endIndex) {
        findIndex = nums[startIndex] === target ? startIndex : -1
        return findIndex;
    }
    const middleIndex = Math.floor((startIndex + endIndex) / 2)
    if (nums[middleIndex] === target) {
        findIndex = middleIndex;
        return findIndex;
    }else if(nums[middleIndex]< target){
       return find(nums,target,middleIndex+1,endIndex)

    }else if(nums[middleIndex] > target){
     return find(nums,target,startIndex,middleIndex-1)
    }
   
    return findIndex;
}
console.log(search([2, 5], 0))
