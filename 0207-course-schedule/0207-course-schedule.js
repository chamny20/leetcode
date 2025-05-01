/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const n = prerequisites.length;
    const graph = {};

    prerequisites.forEach(([a, b]) => {
        graph[a] = graph[a] || [];
        graph[a].push(b);
    });

    const visited = Array(n).fill(0);

    // cycle있는지 확인해야 함
    const dfs = (course) => {
        console.log('dfs', course);
        if (visited[course] === 1) return false; // cycle dectected
        if (visited[course] === 2) return true;  // already visited

        visited[course] = 1; // visiting
        for (const preCourse of graph[course] || []) {
            if (!dfs(preCourse)) return false;
        }
        visited[course] = 2;
        return true;
    }

    for (let i=0; i<numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};