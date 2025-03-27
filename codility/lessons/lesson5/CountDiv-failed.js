// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    let start = A % K === 0 ? A : (A + A%K);
    let ans = 0;
    for (let i=start; i<=B; i+=K) {
        ans++;
    }
    return ans;
}

/*
📌 시간복잡도 분석
for 문이 i = start에서 B까지 K씩 증가하며 실행됨.
반복 횟수 = (𝐵−𝑠𝑡𝑎𝑟𝑡)/𝐾+1 ≈ 𝑂((𝐵−𝐴)/𝐾)

❌ 최악의 경우
예를 들어, A = 0, B = 2 \times 10^9, K = 1 일 경우: 반복 횟수 ≈ 2 x 10^9

Correctness 100%
Performance 25%
*/
