// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let cnt = 0;

    for (let i=0; i<A.length - 1; i++) {  // O(N)
        if (A[i] === 0) {
            for (let j=i+1; j<A.length; j++) {  // O(N)
                if (A[j] === 1) cnt++;
            }
        } 
    }

    // 패싱카 페어 수가 1,000,000,000을 초과하면 -1 반환
    return cnt > 1000000000 ? -1 : cnt;
}

/*

시간 복잡도: O(N²)
이중 반복문을 사용하여 모든 (0,1) 페어를 직접 찾음 → 최악의 경우 N = 100,000일 때 O(10⁹) 연산 발생 가능.
문제에서 N이 최대 100,000이므로, O(N²)으로는 시간 초과(TLE) 가능성이 높음.
Correctness - 100%
Performance - 20%
*/
