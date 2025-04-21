/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.filter(num => num <= target);
    const result = [];
    
    const dfs = (start, sum, arr) => {
        if (sum > target) return;
        if (sum === target) {
            result.push([...arr]);
            return;
        }

        for (let i=start; i<candidates.length; i++) {
            arr.push(candidates[i]);
            dfs(i, sum + candidates[i], arr); // 같은 숫자 사용 가능하니 i로
            arr.pop();
        }

    }

    dfs(0, 0, []);
    return result;

};