// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    const m = P.length;
    const nucleo = {
        'A': 1,
        'C': 2,
        'G': 3,
        'T': 4
    };
    let tmp = S.split('');
    const result = [];

    // m번 반복
    for (let i=0; i<m; i++) {
        // P[i] ~ Q[i] 인덱스
        let arr = tmp.slice(P[i], Q[i] + 1);
        arr = arr.map((st, idx) => arr[idx] = nucleo[st]);
        result.push(Math.min(...arr));
    }
    return result;
}

/*
📌 시간복잡도 분석
tmp.slice(P[i], Q[i] + 1): O(N)
arr.map(...): O(N)
Math.min(...arr): O(N)
위 연산이 m번 반복 → 최악의 경우 O(m * N)

❌ 비효율적인 이유
slice(), map(), Math.min()이 각각 **O(N)**이므로, m개의 질의가 들어오면 **O(m * N)**이 됨.
S와 P, Q가 최대 100,000개까지 주어질 수 있으므로 최악의 경우 100억 번 이상의 연산 → 시간 초과 가능성 큼!

Correctness 100%
Performance 0%
*/
