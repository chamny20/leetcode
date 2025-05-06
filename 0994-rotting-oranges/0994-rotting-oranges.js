/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;  
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];
    let freshCnt = 0;

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCnt++;
            }
        }
    }

    let time = 0;

    while (queue.length && freshCnt > 0) {
        const len = queue.length; // 현재 시간 썩은 오렌지 개수

        for (let k=0; k<len; k++) {
            const [curX, curY] = queue.shift();

            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];

                if(nx>=0 && ny>=0 && nx<m && ny<n && grid[nx][ny] === 1) {
                    queue.push([nx, ny]);
                    grid[nx][ny] = 2;
                    freshCnt--;
                }
            }
        }
        time++;
    }

  
    return freshCnt === 0 ? time : -1;
    
};