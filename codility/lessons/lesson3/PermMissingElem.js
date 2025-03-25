function solution(A) {
    A.sort((a,b) => a-b);
    const len = A.length + 1;
    const arr = Array.from(Array(len), (_, idx) => idx + 1);

    const sumA = A.reduce((sum, num) => sum += num, 0);
    const sumArr = arr.reduce((sum, num) => sum += num, 0);

    return sumArr - sumA;
}
