function solution(A) {
    const dicsList = A.map((radius, idx) => {  // O(N)
        return [idx - radius, idx + radius]; // 시작점과 끝점 담음 (둘다 X좌표)
    });
    
    let ans = 0;
    dicsList.sort((a, b) => a[0] - b[0]);

    for (let i=0; i<dicsList.length - 1; i++) {
            // The function should return -1 if the number of intersecting pairs exceeds 10,000,000.
        if (ans > 10000000) return -1;

        const curEnd = dicsList[i][1];
        for (let j=i+1; j<dicsList.length; j++) {   
            if (dicsList[j][0] <= curEnd) { // i 끝점 >= i+1 시작점
                ans++;
            } else {
                break;
            }
        }
    }
    return ans;
}

/*
✅ break 추가 후 시간복잡도 변화
1. 원의 시작점과 끝점을 정렬 → O(N log N)
2. 이중 루프 실행
- 겹치는 구간만 검사하므로 최악의 경우 O(N log N) ~ O(N²) 사이
- break 덕분에 대부분의 경우 O(N log N)로 동작

📌 결론:
✅ break를 추가하면 O(N²)에서 O(N log N)로 최적화됨!
✅ 더 이상 겹칠 가능성이 없는 경우 루프를 종료하여 불필요한 연산을 방지! 🚀

*/
