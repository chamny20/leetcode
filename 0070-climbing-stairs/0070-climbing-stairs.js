/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i=3; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
};