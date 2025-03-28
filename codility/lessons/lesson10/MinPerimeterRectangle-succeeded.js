// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // O(N) 이하로 짜야 한다!
    let min = Infinity;

    for (let i=1; i<=Math.sqrt(N); i++) {
        if (N % i === 0) {
            const a = i;
            const b = N / i;
            min = Math.min(min, (a + b) * 2);
        }
    }

    return min;
}


/*

⏱ 시간 복잡도 분석
for (let i = 1; i <= Math.sqrt(N); i++) { ... }
=> O(√N) 번 반복
N의 약수 쌍 (a, b)를 찾아 최소 둘레를 계산

✔ 따라서 시간 복잡도는 O(√N)!
💡 N이 10⁹처럼 커도 충분히 빠르게 동작함.

*/
