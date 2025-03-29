// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const n = A.length;
    
    // leader
    const getLeader = (arr) => {
        if (arr.length === 1) return arr[0];

        const limit = Math.floor(arr.length / 2) + 1;
        let leader = -1;

        // leaderObj 구하기
        const obj = {};
        arr.forEach((num) => {
            obj[num] = (obj[num] || 0) + 1;
        });

        // value가 다 같으면 -1 반환해야함
        let valList = Object.values(obj);
        if (new Set(valList).size === 1) return -1;

        // obj sorting
        let order = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
        for (const key of order) {
            if (limit <= obj[key]) {
                leader = key;
            }
        }

        return leader;
    }

    let ans = 0;  // equi leader counting
    for (let i=1; i<n-1; i++) {
        const tmp = A;
        const leftArr = tmp.slice(0, i);
        const rightArr = tmp.slice(i, n);
      
        if (getLeader(leftArr) == getLeader(rightArr)) {
            ans++;
        }
    }

    return ans;
}

/*
Correctness 60%
Performance 0%

*/
