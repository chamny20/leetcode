// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // peak 지점 구하기
    // N = 최대 400,000
    const idxList = [];

    for (let i=1; i<A.length-1; i++) {  // O(N)
        if (A[i-1] < A[i] && A[i] > A[i+1]) {
            idxList.push(i);
        }
    }
    // console.log(idxList);

    let ans = 0;
    // returns the maximum number of flags
    let k = idxList.length;
    while(k > 0) {
        let temp = [];
        for (let i=0; i<idxList.length; i++) {   // 내부 루프는 최대 O(N), 최악의 경우 O(N^2)
            const n = idxList[i];

            if (temp.length === 0) {
                temp.push(n);
                continue;
            } 

            if (Math.abs(temp[temp.length - 1] -  n) >= k) {
                temp.push(n);
            } else {
                continue;
            }
        }
        // console.log(temp, k);

        if (temp.length >= k) {
            ans = k;
            break;
        } else {
            k--;
        }

    }
    return ans;
}

/*

Correctness 100%
Performance 28%

*/
