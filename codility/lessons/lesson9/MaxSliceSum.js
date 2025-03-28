// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let max = A[0];  // 음수 고려해서 첫 요소로 초기화해주기
    let maxSum = A[0];

    for (let i=1; i<A.length; i++) {  // 1부터 시작해야 함
        max = Math.max(A[i], max + A[i]);
        maxSum = Math.max(maxSum, max);
    }
    return maxSum;
}
