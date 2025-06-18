/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const idx = nums.indexOf(target);

    if (idx !== -1) {
        return idx;
    }

    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
};