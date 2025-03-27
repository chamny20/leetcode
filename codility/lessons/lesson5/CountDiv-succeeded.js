// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // 누적합 이용해서 풀어보자.
    // B까지의 누적합 - A-1까지의 누적합

    const bCnt = Math.floor(B / K);
    const aCnt = Math.floor((A-1) / K);

    return bCnt - aCnt;
}

/*
⏱ 시간복잡도 분석
Math.floor(B / K): O(1)
Math.floor((A - 1) / K): (1)

최종 연산: O(1)

*/
