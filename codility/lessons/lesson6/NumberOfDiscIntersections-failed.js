// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const dicsList = A.map((radius, idx) => {  // O(N)
        return [idx - radius, idx + radius]; // 시작점과 끝점 담음 (둘다 X좌표)
    });
    
    let ans = 0;
    for (let i=0; i<dicsList.length - 1; i++) {
            // The function should return -1 if the number of intersecting pairs exceeds 10,000,000.
        if (ans > 10000000) return -1;

        const curEnd = dicsList[i][1];
        for (let j=i+1; j<dicsList.length; j++) {   // → 총 N(N-1)/2 ≈ O(N²)
            if (dicsList[j][0] <= curEnd) { // i 끝점 >= i+1 시작점
                ans++;
            }
        }
    }
    return ans;
}

/*
💡 최악의 경우 O(N²)이라서 비효율적!
→ N ≤ 10,000이면 최대 100,000,000 연산 발생 가능!
→ 따라서 O(N log N) 알고리즘으로 최적화해야 함.

Correctness 100%
Performance 62%
*/
