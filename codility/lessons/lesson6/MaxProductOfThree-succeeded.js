// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    A.sort((a, b) => b - a); // 내림차순 정렬 - O(N log N)
    let ans = A[0] * A[1] * A[2];
    // 음수 개수
    const minusCnt = A.filter((n) => n < 0).length;  // O(N)
    const n = A.length;

    if (minusCnt >= 2) {
        const minusMultiple = A[0] * A[n - 1] * A[n - 2];
        if (minusMultiple > ans) {
            ans = minusMultiple;
        }
    } 

    return ans;
}
