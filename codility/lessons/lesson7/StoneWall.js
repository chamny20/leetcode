// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    let ans = 0;
    let stack = []; 

    for (let i=0; i<H.length; i++) {
        const n = H[i];

        while (stack.length > 0 && stack[stack.length - 1] > n) {
            stack.pop();
        }

        if (stack.length === 0 || stack[stack.length - 1] < n) {
            stack.push(n);
            ans++;
        }
    }

    return ans;
}
