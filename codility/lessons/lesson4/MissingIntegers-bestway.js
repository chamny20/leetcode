function solution(A) {
    const set = new Set(A); // 중복 제거 (O(N))

    for (let i = 1; i <= 1000000; i++) { // O(N)
        if (!set.has(i)) return i;
    }

    return 1000001; // 최댓값보다 1 큰 수
}
