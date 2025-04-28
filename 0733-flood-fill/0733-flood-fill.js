/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // image[sr][sc]
    const m = image.length;
    const n = image[0].length;
    const startColor = image[sr][sc];
    const maps = [...image];
    const visited = Array.from(Array(m), () => Array(n).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const bfs = (start) => {
        const queue = [start];
        const [x, y] = start;
        visited[x][y] = true;
        maps[x][y] = color;

        while (queue.length) {
            const [curX, curY] = queue.shift();

            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];

                if (nx>=0 && ny>=0 && nx<m && ny<n && !visited[nx][ny] && maps[nx][ny] === startColor) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                    maps[nx][ny] = color;
                }
            }
        }
    }
    
    bfs([sr, sc]);


    return maps;

};