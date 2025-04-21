/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];

    const bfs = (start) => {
        const [x, y] = start;
        const queue = [start];
        visited[x][y] = true;
        let area = 1;

        while (queue.length) {
            const [curX, curY] = queue.shift();
            
            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];

                if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && grid[nx][ny]) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                    area++;
                }
            }
        }
        return area;
    }

    const ans = [];

    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (!visited[i][j] && grid[i][j]) {
                ans.push(bfs([i, j]));
            }
        }
    }

    return ans.length > 0 ? Math.max(...ans) : 0;
};