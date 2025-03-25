/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 2일에 사서 5일에 팔기 => 6 - 1 = 5가 이익
    let profit = 0;
    let min = prices[0];

    // 0 case
    if (prices === [...prices].sort((a,b) => b - a))
        return 0;

    for (let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min);
    }

    return profit;
};