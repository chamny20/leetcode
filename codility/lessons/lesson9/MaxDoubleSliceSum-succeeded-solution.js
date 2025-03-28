function solution(A) {
    const n = A.length;

    // 왼쪽에서 오른쪽으로 최대합을 계산하는 배열
    const leftMax = new Array(n).fill(0);
    // 오른쪽에서 왼쪽으로 최대합을 계산하는 배열
    const rightMax = new Array(n).fill(0);

    // 왼쪽 구간
    for (let i = 1; i < n - 1; i++) {
        leftMax[i] = Math.max(0, leftMax[i - 1] + A[i]);
    }

    // 오른쪽 구간
    for (let i = n - 2; i > 0; i--) {
        rightMax[i] = Math.max(0, rightMax[i + 1] + A[i]);
    }
    // console.log(leftMax, rightMax);

    // 중간 값을 기준으로 더블 슬라이스 합을 계산
    let maxSum = 0;
    for (let i = 1; i < n - 1; i++) {
        maxSum = Math.max(maxSum, leftMax[i - 1] + rightMax[i + 1]);
    }

    return maxSum;
}

// O(N)
