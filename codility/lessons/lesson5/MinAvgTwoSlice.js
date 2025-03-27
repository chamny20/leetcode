// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // 최소 평균으로 slice의 starting position을 반환해야 한다.
    // 같은 평균인 슬라이스들이 여러 개여도 어쨌든 가장 작은 starting position 구해야 함
    const n = A.length;
    const prefixSum = Array(n+1).fill(0);

    for (let i=0; i<n; i++) {
        prefixSum[i+1] = prefixSum[i] + A[i];
    }
    // slice 2개, 3개 고려하기

    let minIdx = 0;
    let minAvg = Infinity;

    for (let i=0; i<n-1; i++) {
        let avg2 = (prefixSum[i+2] - prefixSum[i]) / 2;
        if (minAvg > avg2) {
            minAvg = avg2;
            minIdx = i;
        }
        
        // 3개 고려
        if (i + 3 <= n) {
            let avg3 = (prefixSum[i+3] - prefixSum[i]) / 3;
            if (minAvg > avg3) {
                minAvg = avg3;
                minIdx = i;
            }
        }
    }
    return minIdx;
}


/*
누적합 배열 계산은 O(N)
슬라이스의 평균을 계산하는 부분은 배열을 한 번 순회하면서 길이가 2와 3인 슬라이스에 대해서만 평균을 구하기 때문에 전체적으로 O(N)
총 시간복잡도: O(N)

- 길이 2, 3을 우선 고려하는 이유:
문제에서 2개의 연속된 숫자들을 비교하는 것이 핵심. 
2개와 3개로 슬라이스를 나누어서 비교할 수 있다면, 이후 길이가 더 긴 슬라이스는 기본적으로 그 슬라이스 내에서 2개와 3개 길이의 슬라이스를 포함하게 된다.
예를 들어, 길이가 4인 슬라이스의 평균은 길이가 2인 슬라이스의 평균보다 크게 나오거나, 길이가 3인 슬라이스와 비교해서 최소 평균을 찾을 수 있다.

*/
