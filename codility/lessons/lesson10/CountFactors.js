// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // 약수 개수 구하는 문제
    let ans = 0;

    for (let i=1; i<=Math.sqrt(N); i++) {
        if (N % i === 0) {
            ans += 2;
            if (i * i === N) ans--;
        }
    }

    return ans;
}
