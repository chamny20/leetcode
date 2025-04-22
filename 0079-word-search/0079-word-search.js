/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = Array.from(Array(m), () => Array(n).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const dfs = (start, idx) => {
        const [x, y] = start;

        if (idx === word.length) return true;
        if (x < 0 || y < 0 || x >=m || y >= n) return false;
        if (visited[x][y] || board[x][y] !== word[idx]) return false;

        visited[x][y] = true;

        for (let i=0; i<dir.length; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            if (dfs([nx, ny], idx + 1)) return true;
        }

        visited[x][y] = false;
        
        return false;
    }

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (dfs([i, j], 0)) return true;
        }
    }
    
    return false;

};