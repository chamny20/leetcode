function solution(A) {
    A.sort((a, b) => a - b);
    const n = Math.max(...A);
    const len = A.length;

    if (n !== len) return 0;
    const s = new Set(A);
    return s.size === n ? 1 : 0;
}
