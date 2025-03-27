// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // 누적합 사용해서 풀어보자.
    let oneCnt = 0;
    let ans = 0;

    // 거꾸로..
    for (let i=A.length - 1; i >= 0; i--) {  // O(N)
        if (A[i] === 1) {
            oneCnt++;
        } else { // A[i] === 0일때
            ans += oneCnt;
            if (ans > 1000000000) return -1;  // 여기서 바로 검사해야 함
        }
    }

    return ans;
}
