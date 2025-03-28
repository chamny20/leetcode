// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // 올바른 괄호 문제 유사
    const stack = [];

    for (let i=0; i<S.length; i++) {
        const str = S[i];
        const n = stack.length;

        if (stack.length === 0) {
            stack.push(str);
            continue;
        }

        if (str === ')') {
            if (stack[n - 1] === '(') {
                stack.pop();
            }
        } else {
            stack.push(str);
        }
    }

    return stack.length === 0 ? 1 : 0;
}
