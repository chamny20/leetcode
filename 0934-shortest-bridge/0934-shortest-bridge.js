/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const n = grid.length;
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const queue = [];

    // dfs - 하나의 섬 마킹 및 bfs용 큐 구성
    const dfs = (start) => {
        const [x, y] = start;
        visited[x][y] = true;
        queue.push(start);

        for (let i=0; i<dir.length; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny] && grid[nx][ny]) {
                dfs([nx, ny]);
            }
        }
    }
    let isFound = false;
    for (let i=0; i<n; i++) {
        if (isFound) break;
        for (let j=0; j<n; j++) {
            if (!visited[i][j] && grid[i][j]) {
                dfs([i, j]);
                isFound = true;
                break;
            }
        }
    }
    // console.log(queue);

    // bfs - 바다를 통해 다른 섬 만날 때까지 탐색 -> 처음으로 다른 섬을 만나는 순간 그 level이 최소 다리 길이
    const bfs = () => {
        let level = 0;

        while (queue.length) {
            const size = queue.length;

            for (let i=0; i<size; i++) {
                const [curX, curY] = queue.shift();

                for (let i=0; i<dir.length; i++) {
                    const nx = curX + dir[i][0];
                    const ny = curY + dir[i][1];

                    if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny]) {
                        if (grid[nx][ny] === 1) return level;

                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }
            }
            level++;
        }
    }

    return bfs();
};