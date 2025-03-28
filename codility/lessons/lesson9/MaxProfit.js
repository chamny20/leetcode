// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if (A.length < 2) return 0;
    
    let front = A[0];
    let max = 0;
    let maxSum = 0;

    for (let i=1; i<A.length; i++) {
        max = A[i] - front;
        if (max < 0) {
            front = A[i];
        }
        maxSum = Math.max(maxSum, max);
    }
    // console.log(maxSum);
    return maxSum;
}


/* 카데인 알고리즘 참고 */
