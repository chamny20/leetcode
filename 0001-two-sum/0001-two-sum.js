/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    // let isResult = false;

    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
           if (nums[i] + nums[j] === target) {
                return [i, j];
                // isResult = true;
                break;
           } 
        }
        // if (isResult) break;
    }
 
};