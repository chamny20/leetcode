/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const visited = Array(n).fill(false);

    const dfs = (index) => {
        // console.log('index', index);
        if (index === n) return true;
        if (visited[index]) return false;

        for (let i=0; i<wordDict.length; i++) {
            const word = wordDict[i];
            const len = word.length;
            const end = index + len;
            // console.log('word', word);
            // console.log('end', end);

            if (s.slice(index, end) === word) {
                if (dfs(end)) return true;
            }
        }
        visited[index] = true;

        return false;
    }

    return dfs(0);
};