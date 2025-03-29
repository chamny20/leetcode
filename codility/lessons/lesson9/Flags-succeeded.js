function solution(A) {
    // peak 지점 구하기
    // N = 최대 400,000
    const peaks = [];

    // 1. peak 찾기: O(N)
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    // => 최악의 경우 O(N)

    // k개 가능한지 여부 확인하는 함수
    const getIsValid = (arr, k) => {
        const temp = [];
        
        // 2. flag를 배치하는 과정: O(P) (P는 peak 개수)
        for (let i = 0; i < arr.length; i++) {
            const n = arr[i];
            if (temp.length === 0) {
                temp.push(n);
                continue;
            }

            if (Math.abs(temp[temp.length - 1] - n) >= k) {
                temp.push(n);
            } else {
                continue;
            }
        }
        // => 최악의 경우 O(P)

        return temp.length >= k;
    };

    // 3. 이진 탐색을 통한 최대 flag 개수 찾기: O(log P)
    let left = 1;
    let right = peaks.length;

    if (A.length <= 2) return 0; // 길이가 2 이하이면 peak이 존재할 수 없음 → O(1)
    if (peaks.length === 0) return 0; // peak이 없으면 flag를 배치할 수 없음 → O(1)

    let ans = 1;

    // 이진 탐색 진행
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (getIsValid(peaks, mid)) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    // => O(log P)번 반복하며 getIsValid(peaks, mid) 실행 (O(P))

    return ans;
}
