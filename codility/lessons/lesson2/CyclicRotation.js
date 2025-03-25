function solution(A, K) {
    const len = A.length;
    if (K > len)
        K %= len;

    if (K === len) return A;
    const front = A.splice(-K);
    const back = A;
    return front.concat(back);
}
