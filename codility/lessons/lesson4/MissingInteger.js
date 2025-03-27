// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if (A.filter(n => n > 0).length === 0) return 1;

    const n = Math.max(...A);
    const arr = Array.from(Array(n), (_, idx) => idx + 1);

    const setA = new Set(A);
    A = [...setA].sort((a, b) => a - b).filter(n => n > 0);
    
    let ans = 0;
    if (A.length === arr.length) {
        ans = n + 1;
    } else {
        // 가장 작은 양의 정수
        for (let i=0; i<A.length; i++) {
            if (A[i] !== arr[i]) {
                ans = arr[i];
                break;
            }
        }
    }

    return ans;
}
