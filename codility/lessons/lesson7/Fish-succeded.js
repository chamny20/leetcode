// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    const stack = [];

    // 상류 -> 하류 흐름으로 보기
    for (let i=0; i<B.length; i++) {
        const fishNum = A[i];
        const dir = B[i];

        if (dir === 1) {
            stack.push([fishNum, dir]);
        } else { // dir 0이면
            while (stack.length && stack[stack.length - 1][1] === 1) {
                if (stack[stack.length-1][0] < fishNum) {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (stack.length === 0 || stack[stack.length - 1][1] === 0) {
                stack.push([fishNum, dir]);
            }
        }
    }

    return stack.length;
}
