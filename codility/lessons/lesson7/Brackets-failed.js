// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    const stack = [];

    for (let i=0; i<S.length; i++) {
        const str = S[i];
        let n = stack.length;

        if (str === ')') {
            if (S[n - 1] === '(') {
                stack.pop();
                continue;
            }
        } else if (str === ']') {
             if (S[n - 1] === '[') {
                stack.pop();
                continue;
            }
        } else if (str === '}') {
            if (S[n - 1] === '{') {
                stack.pop();
                continue;
            }
        } 
        stack.push(str);
    }

    return stack.length > 0 ? 0 : 1;
}


// 50% 
// correctness 66%, performance 40%;
