function solution(N, A) {
    let arr = Array(N).fill(0);
    let maxCnt = 0;
    let finalVal = 0;

    for (let i=0; i<A.length; i++) {
        const num = A[i];
        if (num <= N) {
            arr[num - 1] = Math.max(arr[num-1], finalVal); // **이 부분 주의하기**
            arr[num - 1] += 1;
            maxCnt = Math.max(maxCnt, arr[num - 1]);
        } else if (num > N) {
            // 맥스카운터 동기화시켜주기
            finalVal = maxCnt;
        }
    }

    arr.forEach((_, idx) => {
        arr[idx] = Math.max(arr[idx], finalVal);
    })

    return arr;
}
