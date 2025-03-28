// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Y를 기준으로 좌우 각각 최대합 구해서 더하기
    // O(N)으로 해결해야 하지 않을까?.. N = 100,000 최대

    // 구간 최대합 구하는 함수
    const getMaxSum = (arr) => {   // O(N)
        if (arr.length === 0) return 0;

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
        const arr1 = tmp.slice(1, i);   // O(N)
        // Y ~ Z
        const arr2 = tmp.slice(i + 1, tmp.length - 1);
        // console.log(arr1, arr2)

        // if (arr1.length === 0 && arr2.length === 0) continue;
        ans = Math.max(ans, getMaxSum(arr1) + getMaxSum(arr2));
    }
    return ans;
}

/*
arr.slice()를 사용하고, 그 후 getMaxSum을 한 번씩 호출하므로 시간 복잡도가 **O(N²)**로 증가.
배열의 크기 N이 최대 100,000일 때 **O(N²)**는 너무 비효율적.

Correctness 100%
Performance 14%
*/
