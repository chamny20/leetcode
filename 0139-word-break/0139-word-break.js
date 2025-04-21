/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     const n = s.length;
//     const visited = Array(n).fill(false);

//     const dfs = (index) => {
//         // console.log('index', index);
//         if (index === n) return true;
//         if (visited[index]) return false;

//         for (let i=0; i<wordDict.length; i++) {
//             const word = wordDict[i];
//             const len = word.length;
//             const end = index + len;
//             // console.log('word', word);
//             // console.log('end', end);

//             if (s.slice(index, end) === word) {
//                 if (dfs(end)) return true;
//             }
//         }
//         visited[index] = true;

//         return false;
//     }

//     return dfs(0);
// };

/**
 * DP 방식
 * 문자열 s가 있을 때, wordDict에 있는 단어들로 쪼개서 만들 수 있는지 확인해야 한다.
 * s[0:i]까지를 wordDict 조합으로 만들 수 있는가?에 대해 고민해야 한다.
 * - 문자열을 앞에서부터 슬라이싱하며 만들 수 있는지 확인하기
 * - 매번 조각이 wordDict에 있는 지 체크하기
 * - 중복 계산은 피하기
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = Array(n + 1).fill(false);
    dp[0] = true; // 빈 문자열은 항상 만들 수 있다.

    for (let i=1; i<=n; i++) {

        for (let j=0; j<i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};