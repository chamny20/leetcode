function solution(A) {
    let ans = 0;
    A.sort((a, b) => a - b);
    const stack = [];

    for (let i=0; i<A.length; i++) {
        if (stack.length > 0) {
            if (A[i] === stack[stack.length-1]) {
                stack.pop();
            }
        } else {
            stack.push(A[i]);
        }
    }
    return stack[0];
}
