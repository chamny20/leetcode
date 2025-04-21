/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const n = wordList.length;
    const visited = Array(n).fill(false);

    const isConnected = (str1, str2) => {
        let cnt = 0;

        for (let i=0; i<str1.length; i++) {
            if (str1[i] !== str2[i]) cnt++;
        }

        return cnt === 1 ? true : false;
    }

    const bfs = (start, target) => {
        const queue = [[start, 1]];
        visited[start] = true;
        // const visited = new Set();
        // visited.add(start);

        while (queue.length) {
            const [cur, cnt] = queue.shift();
            if (cur === target) return cnt;
            
            for (let i=0; i<wordList.length; i++) {
                // if (!visited.has(wordList[i]) && isConnected(wordList[i], cur)) {
                //     queue.push([wordList[i], cnt + 1]);
                //     visited.add(wordList[i]);
                // }
                if (!visited[i] && isConnected(wordList[i], cur)) {
                    queue.push([wordList[i], cnt + 1]);
                    visited[i] = true;
                }
            }
        }
        return 0;
    }

    const ans = bfs(beginWord, endWord);

    return ans;
};