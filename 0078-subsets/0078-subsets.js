/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];

    const dfs = (idx, arr) => {
        ans.push([...arr]);

        for (let i=idx; i<nums.length; i++) {
            arr.push(nums[i]);
            dfs(i + 1, arr);
            arr.pop();
        }
    }

    dfs(0, []);

    return ans;
};