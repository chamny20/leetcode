/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from(Array(m), () => Array(n).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const bfs = (start) => {
        const queue = [start];
        visited[start[0]][start[1]] = true;

        while (queue.length) {
            const [curX, curY] = queue.shift();

            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];

                if (nx>=0 && ny>=0 && nx<m && ny<n && !visited[nx][ny] && grid[nx][ny] === '1') {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
    let cnt = 0;

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                bfs([i, j]);
                cnt++;
            }
        }
    }
    return cnt;
};