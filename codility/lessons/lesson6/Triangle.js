// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // 내림차순 정렬
    A.sort((a, b) => b - a);  // O(n log n)

    const n = A.length;
    if (n < 3) return 0;
    
    for (let i=0; i<n-2; i++) {
        if (A[i] > 0 && A[i] < A[i+1] + A[i+2]) {
            return 1;
        }
    }
    return 0;
}
