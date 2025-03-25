function solution(X, A) {
    const setA = new Set();

    for (let i=0; i<A.length; i++) {
        setA.add(A[i]);
        if (setA.size === X) return i;
    }

    return -1;
}
