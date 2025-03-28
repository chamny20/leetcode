// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    const stack = [];

    // 상류 -> 하류 흐름으로 보기
    for (let i=0; i<B.length; i++) {
        const fishNum = A[i];
        const dir = B[i];

        // 스택이 비어있으면 일단 넣기
        if (stack.length === 0) {
            stack.push([fishNum, dir]);
            continue;
        }
        
        // 10일때 없어질 수 있음
        if (dir === 0) {
            if (stack[stack.length - 1][1] === 1) {
                if (stack[stack.length - 1][0] < fishNum) {
                    stack.pop();
                    stack.push([fishNum, dir]);
                    continue;
                }
            }
        } else {
            stack.push([fishNum, dir]);
        }

    }

    return stack.length;
}


/*
correctness 25%
Performance 25%

*/
