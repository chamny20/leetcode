// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // 누적합을 사용해서 풀어보자..
    const n = S.length;
    const m = P.length;

    const nucleo = {
        'A': 1,
        'C': 2,
        'G': 3,
        'T': 4
    };

    const prefix = Array.from(Array(4), () => Array(n+1).fill(0));

    for (let i=0; i<n; i++) {
        const num = nucleo[S[i]];
        for (let j=0; j<4; j++) {
            prefix[j][i+1] = prefix[j][i] + ((j + 1) === num ? 1 : 0);
        }
    }

    // console.log(prefix);
    const result = [];

    for (let i=0; i<m; i++) {
        let start = P[i];
        let end = Q[i] + 1;
        // console.log('start and end', start, end)
        for (let j=0; j<4; j++) {
            // A, C, G, T
            // console.log(prefix[j][end], prefix[j][start])
            if (prefix[j][end] - prefix[j][start] > 0) {
                result.push(j + 1); // j+1을 해야 nucleo에 맞게 넣어짐
                break;
            }
        }
    }

    return result;
}


/*

📌 시간복잡도 분석

Prefix Sum 계산 (첫 번째 for 문): O(N)
각 구간별(P, Q) 처리 (두 번째 for 문, 각 쿼리는 O(1)): O(M)

총 시간복잡도: O(N + M) → 매우 효율적!

*/
