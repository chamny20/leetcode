/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (!mat[i][j]) {
                queue.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }

    while (queue.length) {
        const [curX, curY] = queue.shift();

        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];

            if (nx>=0 && ny>=0 && nx<m && ny<n && mat[nx][ny] === -1) {
                queue.push([nx, ny]);
                mat[nx][ny] = mat[curX][curY] + 1;
            }
        }
    }

    return mat;
};