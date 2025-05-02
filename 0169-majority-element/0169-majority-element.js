/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const t = Math.ceil(n / 2);
    const obj = {};
    let ans = 0;

    for (let i=0; i<n; i++) {
        const num = nums[i];
        obj[num] = obj[num] || 0;
        obj[num]++;

        if (obj[num] >= t) {
            ans = num;
            break;
        }
    }
    return ans;
};