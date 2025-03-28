// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Y를 기준으로 좌우 각각 최대합 구해서 더하기
    // O(N)으로 해결해야 하지 않을까?.. N = 100,000 최대

    // 구간 최대합 구하는 함수
    const getMaxSum = (arr) => {
        let max = arr[0];
        let maxSum = arr[0];

        for (let i=1; i<arr.length; i++) {
            max = Math.max(arr[i], max + arr[i]);
            maxSum = Math.max(maxSum, max);
        }
        return maxSum;
    }
    
    let tmp = A;
    let ans = 0;

    for (let i=1; i<A.length-1; i++) {
        // X ~ Y
        const arr1 = tmp.slice(1, i);
        // Y ~ Z
        const arr2 = tmp.slice(i + 1, tmp.length - 1);

        if (arr1.length === 0 || arr2.length === 0) continue;
        ans = Math.max(ans, getMaxSum(arr1) + getMaxSum(arr2));
    }
    return ans;
}

/*
Correctness 50%
Performance 0%
*/
