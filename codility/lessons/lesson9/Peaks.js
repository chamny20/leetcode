// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const n = A.length;
    // goal: find the maximum number of blocks
    // blocks containing same number of elements
    // 이진 탐색으로 mid 먼저...
    const peaks = [];
  
    // peak 구하기 O(N)
    for (let i=1; i<A.length-1; i++) {
        if (A[i-1] < A[i] && A[i] > A[i+1]) {
            peaks.push(i);
        }
    }
    if (peaks.length === 0) return 0;

    // console.log(peaks);

    let ans = 1;
    // 가능한 블록 개수 찾기 (O(log(N)) → 약수 개수)
    for (let i=1; i<=n; i++) { // O(√N), n의 약수 개수에 비례
        if (n % i !== 0) continue;  // 같은 개수로 쪼개지지 않으면 skip
        // i는 블록 개수
        // 1, 2, 3, 4, 6, 12
        let blockSize = n / i; // 블록 한 사이즈
        const blockArr = new Array(i).fill(false);
        let cnt = 0;

        for (const peak of peaks) {   // O(N)
            let blockIdx = Math.floor(peak / blockSize);
            
            if (!blockArr[blockIdx]) {
                blockArr[blockIdx] = true;
                cnt++;
            }
        }
        if (cnt === i) {
            ans = i;
        }

    }
    return ans;
}


/*
총 시간복잡도: O(N * log(log(N)))

시간복잡도 분석:
1. Peak 찾기 → O(N)
2. 블록 개수의 약수 찾기 (최대 O(√N))
3. 각 블록 개수에 대해 Peak 확인 → O(N)
=> O(N * log(log(N))) (약수 개수 O(log(log(N))) 가정 시)
*/
